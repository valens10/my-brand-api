// app.js
const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  config = require('./config'),

  //created models loading here
  model = require('./api/models/mybrandModel'),
  bodyParser = require('body-parser');
  
//mongoose instance connection url connection
mongoose.Promise = global.Promise;
const db = require('./db')
const port = config.app.port;


app.use(bodyParser.urlencoded(
    { extended: true }
));
app.use(bodyParser.json());

//importing route
var user_routes = require('./api/routes/user');
var post_routes = require('./api/routes/post');
var message_routes = require('./api/routes/message');
var comment_routes = require('./api/routes/comment');

//register the route
user_routes(app);
post_routes(app);
message_routes(app);
comment_routes(app);

//raise error when url not found.
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port,
  () => console.log("app is listerning on port " + port));