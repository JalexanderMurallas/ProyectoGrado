const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

exports.signup = async (req, res) => {
  try {
    let user;

    //creamos el usuario
    user = new User(req.body);
    await user.save();

    const token = jwt.sign({ _id: user._id, _rol: user.rol }, process.env.COMINO);
    res.status(200).json({ token });

  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("El Email no existe");
    if (user.password !== password)
      return res.status(401).send("La contraseña no coinside");

    const token = jwt.sign({ _id: user._id, _rol: user.rol, _email: user.email }, process.env.COMINO);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.getUsers = async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.getUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ msg: "No existe el producto" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.updateUser = async (req, res) => {
  try {
    //creo obj para recibir cada attrib
    //const { name, lastName, email, password } = req.body;
    const { name, lastName, rol, email, password } = req.body;
    let user = await User.findById(req.params.id); //llamar parametro id

    if (!user) {
      res.status(404).json({ msg: "El usuario ingresado no existe " });
    }

    user.name = name;
    user.lastName = lastName;
    user.rol = rol;
    user.email = email;
    user.password = password;

    user = await User.findOneAndUpdate({ _id: req.params.id }, user, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }

    await User.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Usuario eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.tasks = async (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Task one",
      description: "lorem ipsum",
      date: "2019-11-17T20:39:05.211Z",
    },
    {
      _id: 2,
      name: "Task TWO",
      description: "lorem ipsum",
      date: "2019-11-17T20:39:05.211Z",
    },
    {
      _id: 3,
      name: "Task THREE",
      description: "lorem ipsum",
      date: "2019-11-17T20:39:05.211Z",
    },
  ]);
};

exports.privatetasks = async (req, res) => {
  res.json([
    {
      _id: 4,
      name: "Task four",
      description: "lorem ipsum",
      date: "2019-11-17T20:39:05.211Z",
    },
    {
      _id: 5,
      name: "Task FIVE",
      description: "lorem ipsum",
      date: "2019-11-17T20:39:05.211Z",
    },
    {
      _id: 6,
      name: "Task SIX",
      description: "lorem ipsum",
      date: "2019-11-17T20:39:05.211Z",
    },
  ]);
};
