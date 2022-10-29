function verifyToken(req, res, next) {
  const jwt = require("jsonwebtoken");

  //console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).send("Autorizacion denegada** >:(");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (token === "null") {
    return res.status(401).send("Autorizacion denegada** >:(");
  }

  const payload = jwt.verify(token, process.env.COMINO);

  req.userToken = payload;

  next();

  console.log(payload._email);
}

module.exports = verifyToken;