"use strict";
require('dotenv').config();

const http = require('http')
const Bot = require('messenger-bot')

const FB_TOKEN = process.env.FB_TOKEN
const FB_VERIFY = process.env.FB_VERIFY

if (!FB_TOKEN || !FB_VERIFY){
    throw "Vous n'avez pas le fichier .env créé avec les variables d'authetification. C'est Basique, Simple !"
}

let bot = new Bot({
    token: FB_TOKEN,
    verify: FB_VERIFY
})


bot.on('error', (err) => {
    console.log(err.message)
})

bot.on('message', (payload, reply) => {
  console.log(payload);
  console.log(reply);
    let text = payload.message.text
    reply({
        text
    }, (err) => {
        if (err) {
            console.log(err.message)
        }

        console.log(`Echoed back : ${text}`)
    })
})
http.createServer(bot.middleware()).listen(5000)
console.log('Server is running.')
