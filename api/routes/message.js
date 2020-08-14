'use strict';
module.exports = function(app) {
  var messagesView = require('../controllers/message');

  // posts Routes
  app.route('/messages')
    .get(messagesView.list_all_messages)
    .post(messagesView.create_a_message);


  app.route('/messages/:id')
    .get(messagesView.get_a_message)
    .patch(messagesView.update_a_message)
    .delete(messagesView.delete_a_message);
};