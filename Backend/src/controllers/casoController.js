const Caso = require("../models/caso"); //cambiar al final

exports.crearCaso = async (req, res) => {

    try {

        let caso;
        caso = new Caso(req.body);
        if (!caso) {
          return res.status(404).json({ msg: "Error, caso vacio" });
        }
        let usert = req.userToken;

        if (!usert) {
          return res.status(404).json({ msg: "Error, Usuario no autenticado" });
        }

        caso.codigo=usert._id;
        await caso.save();
        res.send(caso);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error!');
    }
}

exports.getCasos = async (req, res) => {
    try {

      let caso
      let token = req.userToken;
      if (token._rol==="Administrador") {
        caso = await Caso.find();
        res.json(caso);
      } else {
        caso = await Caso.find({"codigo":token._id});
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
      
      let usert = req.userToken;
      caso.incidencia.push({
        email: usert._email,
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
      console.log(caso)
      if (!caso) {
        res.status(404).json({ msg: "El Caso ingresado no existe " });
      }
      caso.estado = 'CERRADO';
       console.log(caso)
      caso = await Caso.findOneAndUpdate({ _id: req.params.id }, caso, {
        new: true,
      });
      res.json(caso);
    } catch (error) {
      console.log(error);
      res.status(500).send("hubo un error :(");
    }
  };

  exports.eliminarCaso = async (req, res) => {
    try {
        let caso = await Caso.findById(req.params.id);

        if (!caso) {
            res.status(404).json({ msg: 'No existe el Perisferico' })
        }

        //await peripheral.findOneAndRemove({ _id: req.params.id })
        await Caso.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Perisferico Eliminado eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

