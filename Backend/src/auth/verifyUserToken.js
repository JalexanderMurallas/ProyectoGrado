function verifyUserToken(data) {
    const jwt = require("jsonwebtoken");

    if (!data) {
      return res.status(401).send("Autorizacion denegada** >:(");
    }
  
    const token = data.split(" ")[1];
  
    if (token === "null") {
      return res.status(401).send("Autorizacion denegada** >:(");
    }
  
    const payload = jwt.verify(token, process.env.COMINO);

     return payload;
  
  }
  
  module.exports = verifyUserToken;