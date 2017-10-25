'use strict'

require ('dotenv').config

module.exports = {

    extern: {

        messagesService : {
            postMessage: () => 'http://localhost:4002/api/message'
        },

        facebook: {
            messages: () => 'https://graph.facebook.com/v2.10/me/messages'
        },
    },

    intern: {
        webhook: '/webhook',
        reply: `/api/reply`
    }
}