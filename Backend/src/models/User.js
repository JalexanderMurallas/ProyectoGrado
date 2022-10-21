const { Schema, model } = require("mongoose");

//todos llevan required
const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: true,
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
