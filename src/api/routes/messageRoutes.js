'use strict'

module.exports = function(app) {
  const message  = require('../controllers/messageControllers');

  app.route('/webhook')
    .get(message.getAuth)
    .post(message.postRes);
}
