const { Schema, model } = require("mongoose");

const PeripheralsSchema = new Schema(
  {
    brand: String, //brand
    model: String, //model
    serial: String, //serial, may be required n uniqueo0
    periType: String, //type is a subDocument, sugerencia setType <---
    entryDate: Date,
    lowDate: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Peripheral", PeripheralsSchema);

module.exports = model("Peripheral", PeripheralsSchema);
