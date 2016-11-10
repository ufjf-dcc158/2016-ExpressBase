var express = require("express");

module.exports = function(){
  var app = express();
  require('../app/routes/index.routes.server.js')(app);
  return app;
}
