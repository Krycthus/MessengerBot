'use strict'

import Paths from '../conf/paths'
import Message from '../controllers/messageControllers'
import Joi from 'joi'

module.exports = (server) => {

  server.route({
    method: 'GET',
    path: Paths.intern.webhook,
    handler: Message.getAuth,
    config: {
        tags: ['api']
    }
  })

  server.route({
    method: 'POST',
    path: Paths.intern.webhook,
    handler: Message.postRes,
    config: {
        tags: ['api']
    }
  })

  server.route({
    method: 'POST',
    path: Paths.intern.reply,
    handler: Message.replyMessage
  })
}
