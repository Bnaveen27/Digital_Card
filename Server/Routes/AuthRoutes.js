const express = require("express");
const { registerUser, loginUser } = require("../Controller/AuthController");

const router = express.Router();

router.post("/Pages/Register/Register", registerUser);
router.post("/Pages/Login/Login", loginUser);

module.exports = router;
