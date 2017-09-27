'use strict'
const request = require('request');

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

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: process.env.FB_TOKEN},
    method: 'POST',
    json: {
      recipient: {id: sender},
      message: {text: text}
    }
  }, function (error, response) {
    if (error) {
        console.log('Error sending message: ', error);
    } else if (response.body.error) {
        console.log('Error: ', response.body.error);
    }
  });
}
