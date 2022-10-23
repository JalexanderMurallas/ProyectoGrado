const { Schema, model } = require("mongoose");

//Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
      maxlength: [50, "El nombre no puede tener mas de 50 caracteres"],
      minlength: [1, "El nombre debe contener al menos 1 caracteres"],
    },
    lastName: {
      type: String,
      required: [true, "El apellido es requerido"],
      maxlength: [50, "El apellido no puede tener mas de 50 caracteres"],
      minlength: [1, "El apellido debe contener al menos 1 caracteres"],
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
        "El correo no es valido, verifica tu correo",
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
