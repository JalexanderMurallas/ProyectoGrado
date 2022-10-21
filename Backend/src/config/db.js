const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("BASE DE DATOS CONECTADA");
  } catch (error) {
    console.log(error.message);
    process.exit(1); //detenemos la App
  }
};
module.exports = conectarDB;


