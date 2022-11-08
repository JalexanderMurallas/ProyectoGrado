const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });
const {Base64} = require('js-base64');

exports.signup = async (req, res) => {
  try {
    let user;

    //creamos el usuario
    user = new User(req.body);
    console.log(user)
    user.password=Base64.encode(user.password);
    console.log(user)
    await user.save();
    res.send(user);

  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error :(");
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    let passwordencode=Base64.encode(password);
    if (!user) return res.status(401).send("El Email no existe");
    if (user.password !== passwordencode){
      return res.status(401).send("La contraseña no coincide");}

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
      return res.status(404).json({ msg: "No existe el Usuario" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("hubo un error :(");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, lastName, rol, email, password } = req.body;
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "El usuario ingresado no existe " });
    }

    user.name = name;
    user.lastName = lastName;
    user.rol = rol;
    user.email = email;
    user.password = Base64.encode(password);

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
      return res.status(404).json({ msg: "No existe el usuario" });
    }

    await User.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Usuario eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error :(");
  }
};
