'use strict';
module.exports = function(app) {
  var commentsView = require('../controllers/comment');

  // posts Routes
  app.route('/users')
    .get(commentsView.list_all_comment)
    .post(commentsView.create_a_comment);


  app.route('/users/:id')
    .get(commentsView.get_a_comment)
    .patch(commentsView.update_a_comment)
    .delete(commentsView.delete_a_message);
};