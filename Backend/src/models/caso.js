const { Schema, model } = require("mongoose");

const casoSchema = new Schema(
  {
    codigo: {
      type: String,
      required: [true, "Campo requerido"],
    }, //brand
    titulo: {
      type: String,
      required: [true, "Campo requerido"],
    }, //model
    incidencia: {
        type: Array,
        default: [
            {
              email: {
                type: String,
                required: [true, "Campo requerido"],
              },
              mensaje: {
                type: String,
                required: [true, "Campo requerido"],
              }
            }

        ]        
      }, //model
    estado: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    }, //serial, may be required n uniqueo0
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Caso", casoSchema);

module.exports = model("Caso", casoSchema);