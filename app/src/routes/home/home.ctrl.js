"use strict";

//contoller 부분
const output = {
    home: (req, res) => {
      res.render("home/index");
    },
    login: (req, res) => {
      res.render("home/login");
    },
  };
  const process = {
    login: (req, res) => {
        console.log(req.body);
    }
    };
  
//모듈화를 통해 index.js 에서 사용
module.exports = {
    output,
    process,
};
