var express = require("./config/express");
var app = express();
app.listen(3000);
console.log("Executando na porta http://localhost:3000...");

module.exports = app;
