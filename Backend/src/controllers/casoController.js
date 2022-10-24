const Caso = require("../models/caso"); //cambiar al final
const emailToken = require("../auth/verifyUserToken");
const jwt = require("jsonwebtoken");

exports.crearCaso = async (req, res) => {

    try {

        let caso;
        caso = new Caso(req.body);
        let data = req.headers.authorization;
        console.log(data);
        let emailt = emailToken(data);
        console.log(emailt._id);
        caso.codigo=emailt._id;
        await caso.save();
        res.send(caso);

        console.log(caso);

    } catch (error) {
        console.log(error);
        res.status(500).send('ha ocurrido un error!');
    }
}

exports.getCasos = async (req, res) => {
    try {

      let caso
      let data = req.headers.authorization;
      let token = emailToken(data);

      if (token._rol==="Administrador") {
        caso = await Caso.find();
        res.json(caso);
      } else {
        let caso = await Caso.find({"codigo":token._id});
        res.json(caso);
      }

    } catch (error) {
      console.log(error);
      res.status(500).send("hubo un error :(");
    }
};

exports.getCasoById = async (req, res) => {
  try {
    let caso = await Caso.findById(req.params.id);

    if (!caso) {
      res.status(404).json({ msg: "No existe el producto" });
    }

    res.json(caso);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.anadirSeguimiento = async (req, res) => {
    try {

      const { mensaje } = req.body;
      let caso = await Caso.findById(req.params.id); //llamar parametro id
  
      if (!caso) {
        res.status(404).json({ msg: "El Caso ingresado no existe " });
      }
      
      let data = req.headers.authorization;
      console.log(data);
      let emailt = emailToken(data);
      console.log(emailt._email);
      caso.incidencia.push({
        email: emailt._email,
        mensaje: mensaje
       });
       
      caso = await Caso.findOneAndUpdate({ _id: req.params.id }, caso, {
        new: true,
      });
      res.json(caso);
    } catch (error) {
      console.log(error);
      res.status(500).send("hubo un error :(");
    }
  };

  exports.cerrarCaso = async (req, res) => {
    try {

      let caso = await Caso.findById(req.params.id); //llamar parametro id
  
      if (!caso) {
        res.status(404).json({ msg: "El Caso ingresado no existe " });
      }
      
      console.log(caso);
      caso.estado = 'CERRADO';
       
      caso = await Caso.findOneAndUpdate({ _id: req.params.id }, caso, {
        new: true,
      });
      res.json(caso);
    } catch (error) {
      console.log(error);
      res.status(500).send("hubo un error :(");
    }
  };

