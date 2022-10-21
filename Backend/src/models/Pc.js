const { Schema, model } = require("mongoose");

const PcSchema = new Schema(
  {
    brand: String, //brand
    model: String, //model autoincre <--
    serial: {
      type: String,
      unique: true,
      required: true,
      uppercase: true,
    }, //serial
    pcType: String, //type is a subDocument, sugerencia setType <---
    location: String,
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
