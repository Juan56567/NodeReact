const controller = {};
const db = require("../db/database");
const userModel = require("../models/dbModels");
const bcrypt = require("bcryptjs");

controller.home = (req, res) => {
  res.render("login");
  db.authenticate();
};

controller.login = async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const dbInfo = await userModel.findOne({ where: { user: user } });
  const rol = dbInfo.dataValues.rol;
  const hash = dbInfo.dataValues.password;

  if (bcrypt.compareSync(password, hash) == false) {
    res.redirect("/");
  } else {
    if (rol == "admin") {
      res.render("admin");
    } else {
      res.render("test");
    }
  }
};

module.exports = controller;
