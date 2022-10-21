const { Schema, model } = require("mongoose");

const PcSchema = new Schema(
  {
    brand: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    }, //brand
    model: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    }, //model autoincre <--
    serial: {
      type: String,
      unique: true,
      required: [true, "Campo requerido"],
      uppercase: true,
    }, //serial
    pcType: String, //type is a subDocument, sugerencia setType <---
    location: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    },
    cpu: String,
    RAMSize: String, //actual RAM size
    hdd: String,
    entryDate: Date,
    lowDate: Date,
    lastMaintenance: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Pc", PcSchema);

module.exports = model("Pc", PcSchema);
