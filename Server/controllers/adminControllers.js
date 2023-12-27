const controller = {};
const userModel = require("../models/dbModels");
const bcrypt = require("bcryptjs");

controller.createUser = async (req, res) => {
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  const name = req.body.name;
  const rol = req.body.rol;
  const userName = req.body.userName;
  const newUSer = await userModel.create({
    user: userName,
    password: hashed,
    name: name,
    rol: rol,
  });
  res.send('listo mi so')
};

module.exports = controller;
