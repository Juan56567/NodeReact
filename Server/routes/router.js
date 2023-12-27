const express = require("express");
const router = express.Router();
const loginControllers = require("../controllers/loginControllers");
const adminController = require("../controllers/adminControllers");

router.get("/", loginControllers.home);
router.post("/login", loginControllers.login);
router.post("/createUser", adminController.createUser);
router.get("/test", (req, res) => {
  res.render("admin");
});

module.exports = router;
