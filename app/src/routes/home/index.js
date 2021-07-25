"use strict";

const express = require("express");
const router = express.Router();

//home.ctrl 모듈을 받아와서 사용  항상 module화를 해줘야 사용가능
const ctrl = require("./home.ctrl");

//router 는 단순히 해당 도메인이 들어왔을 때  요청을 연결해주는 역할 뿐
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
