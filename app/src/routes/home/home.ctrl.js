"use strict";

const users = {
  id : ["1234", "asdf"],
  password : ["1234" , "asdf"],
};

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
       const id = req.body.id,
        password = req.body.password;

       if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.password[idx] === password){
          return res.json({
            success : true,
          });
         }
       }
       return res.json({
         success : false,
         msg : "로그인 실패"
       });
    }
    };
  
//모듈화를 통해 index.js 에서 사용
module.exports = {
    output,
    process,
};
