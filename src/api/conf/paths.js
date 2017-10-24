'use strict'

require ('dotenv').config

const path = process.env.PATH

module.exports = {

    extern: {

        messagessService : {
            postMessage: () => 'http://localhost:4002/api/message'
        },

        facebook: {
            messages: () => 'https://graph.facebook.com/v2.10/me/messages'
        },
    },

    intern: {
        webhook: '/webhook',
        reply: `${path}reply`
    }
}