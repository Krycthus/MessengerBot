'use strict'

require ('dotenv').config

import Paths from '../conf/paths'
import Boom from 'boom'
import Fetch from 'node-fetch'
import request from 'request'

exports.getAuth = (request, reply) => {
  if (request.query['hub.mode'] && request.query['hub.verify_token'] === process.env.FB_VERIFY) {
    reply(request.query['hub.challenge'])
  } else {
    reply(Boom.badGateway())
  }
}

exports.postRes = (request, reply) => {
  if (request.payload.object === 'page') {
    request.payload.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        if (event.message && event.message.text) {
          postMessage(event);
        }
      });
    });
    reply()
  }
  else {
    reply(Boom.notFound())
  }
}

exports.replyMessage = (request, reply) =>{ 
  sendMessage(request.payload)
  reply()
} 

const postMessage = (event) => {
  Fetch(Paths.extern.messagesService.postMessage(), {
    method: 'POST',
    body: JSON.stringify({
      id: event.sender.id,
      text: event.message.text
    })
  })
  .catch(error => console.log(error))
}

function sendMessage(message) {
  request({
  url: Paths.extern.facebook.messages(),
    qs: {access_token: process.env.FB_TOKEN},
    method: 'POST',
    json: {
      recipient: {id: message.id},
      message: {text: message.content}
    }
  }, (error, response) => {
    if (error) {
        console.log('Error sending message: ', error);
    } else if (response.body.error) {
        console.log('Error: ', response.body.error);
    }
  });
}

/*
let sender = event.sender.id;
let text = event.message.text;

let apiai = apiaiApp.textRequest(text, {
  sessionId: 'tabby_cat' // use any arbitrary id
});

apiai.on('response', (response) => {
  // Got a response from api.ai. Let's POST to Facebook Messenger
  let aiText = response.result.fulfillment.speech;

});

apiai.on('error', (error) => {
  console.log(error);
});

apiai.end();
*/
