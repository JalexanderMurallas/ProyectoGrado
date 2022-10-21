const { Schema, model } = require("mongoose");

const PeripheralsSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      uppercase: true,
    }, //brand
    model: {
      type: String,
      required: true,
      uppercase: true,
    }, //model
    serial: {
      type: String,
      required: true,
      uppercase: true,
    }, //serial, may be required n uniqueo0
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
