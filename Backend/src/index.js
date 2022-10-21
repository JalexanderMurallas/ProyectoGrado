//imports
const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT;

//instancia express
const app = express();

//DB conexion
conectarDB();

app.use(cors());
app.use(express.json());

//routes
app.use("/api", require("./routes/routes"));

//run
app.listen(PORT, () => {
  console.log("Server Run on PORT: ", PORT);
});


