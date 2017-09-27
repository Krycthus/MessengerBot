'use strict'
const request = require('request');
const apiaiApp = require('apiai')(process.env.APIAI_TOKEN);
console.log(process.env.APIAI_TOKEN)

exports.getAuth = function(req, res){
  if (req.query['hub.mode'] && req.query['hub.verify_token'] === process.env.FB_VERIFY) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.status(403).end();
  }
};

/* Handling all messenges */
exports.postRes = function(req, res) {
  console.log(req.body.entry[0].messaging);
  if (req.body.object === 'page') {
    req.body.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        if (event.message && event.message.text) {
          sendMessage(event);
        }
      });
    });
    res.status(200).end();
  }
};

function sendMessage(event) {
  let sender = event.sender.id;
  let text = event.message.text;

  let apiai = apiaiApp.textRequest(text, {
    sessionId: 'tabby_cat' // use any arbitrary id
  });

  apiai.on('response', (response) => {
    // Got a response from api.ai. Let's POST to Facebook Messenger
    let aiText = response.result.fulfillment.speech;

    request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {access_token: process.env.FB_TOKEN},
      method: 'POST',
      json: {
        recipient: {id: sender},
        message: {text: aiText}
      }
    }, (error, response) => {
      if (error) {
          console.log('Error sending message: ', error);
      } else if (response.body.error) {
          console.log('Error: ', response.body.error);
      }
    });
  });

  apiai.on('error', (error) => {
    console.log(error);
  });

  apiai.end();
}
