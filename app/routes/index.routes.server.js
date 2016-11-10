module.exports = function(app){
  var index = require('../controllers/index.controllers.server.js');
  app.use("/", index.home);
}
