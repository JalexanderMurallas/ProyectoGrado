const { Schema, model } = require("mongoose");

//todos llevan required
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Campo requerido"],
    },
    lastName: {
      type: String,
      required: [true, "Campo requerido"],
    },
    rol: {
      type: String,
      required: [true, "Campo requerido"],
    },
    email: {
      type: String,
      unique: [true, "E-mail duplicado requerido"],
      required: [true, "El correo es requerido"],
      maxlength: [100, "El correo no puede exceder 100 caracteres"],
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "El correo electrónico no tiene el formato adecuado",
      ],
    },
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("User", userSchema);

module.exports = model("user", userSchema);
