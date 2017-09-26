"use strict";
require('dotenv').config();

const http = require('http')
const Bot = require('messenger-bot')

const FB_TOKEN = 'EAAB1tldprnoBAEtBHWZBasAVh4fiTQybBvU8ufWehkUPkbIhTpZCRIGW74GrYddNMD4vcVS7k7ACwSSwEiVvjRzZBWFU0cB1S8rvUVBUfMb67MQip3NtDpCp9CJtmbqZBoAF9bcXGg5Aak8dZBKJ5cXjCjc0a5PIrEQHaYZASFDAZDZD'
const FB_VERIFY = 'je_suis_un_panda'

console.log(FB_TOKEN + " " + FB_VERIFY)

let bot = new Bot({
    token: FB_TOKEN,
    verify: FB_VERIFY
})


bot.on('error', (err) => {
    console.log(err.message)
})

bot.on('message', (payload, reply) => {
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
