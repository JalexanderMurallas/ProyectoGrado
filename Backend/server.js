const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config()

//linea agregada para evitar problemas al enviar datos
app.use(express.urlencoded({extended: true}));

//aca se agrego useNewUrlParser, anterior esta 'Deprecate'
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>console.log("DB conectada ok"))
.catch(e=> console.log(e));

app.use(express.json());
app.use(cors())
app.use('/app', routesUrls)

app.listen(4000, () => console.log("Servidor activado"))