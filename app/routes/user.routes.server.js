module.exports = function(app){
  var user = require("../controllers/user.controllers.server.js");
  app.use("/user/create", user.create);
}
