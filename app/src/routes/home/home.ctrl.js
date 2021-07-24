"use strict";

const User = require("../../models/User");

//contoller 부분
const output = {
    home: (req, res) => {
      res.render("home/index");
    },
    login: (req, res) => {
      res.render("home/login");
    },
    register:(req,res) => {
      res.render("home/register");
    },
  };
  const process = {
    login: async (req, res) => {
      const user = new User(req.body);
      const response = await user.login();
      return res.json(response);
    },
    register: async (req, res) => {
      const user = new User(req.body);
      const response = await user.register();
      return res.json(response);
    },
  };
  
//모듈화를 통해 index.js 에서 사용
module.exports = {
    output,
    process,
};
