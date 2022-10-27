const { Schema, model } = require("mongoose");

const casoSchema = new Schema(
  {
    codigo: {
      type: String,
      required: [true, "Campo requerido"],
    },
    titulo: {
      type: String,
      required: [true, "Campo requerido"],
    },
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
      },
    estado: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    }, 
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Caso", casoSchema);

module.exports = model("Caso", casoSchema);