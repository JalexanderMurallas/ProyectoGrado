const { Schema, model } = require("mongoose");

const mensajeSchema = new Schema(
  {

    email: {
        type: String,
        required: [true, "Campo requerido"],
    },
    mensaje: {
        type: String,
        required: [true, "Campo requerido"],
    }
           
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Mensaje", mensajeSchema);

module.exports = model("Mensaje", mensajeSchema);