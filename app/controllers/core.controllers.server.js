module.exports.home = function (req, res, next) {
  res.send("Hello World!");
}

module.exports.contato = function (req, res, next) {
  res.send({
    versao: 1.0,
    contato: "fulano@gmail.com"
  });
}
