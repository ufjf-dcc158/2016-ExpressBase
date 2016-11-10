module.exports = function(app){
  var core = require('../controllers/core.controllers.server.js');
  app.use("/contato.json", core.contato);
  app.use("/", core.home);

}
