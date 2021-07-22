"use strict";

//contoller 부분
const home = (req, res)=>{
    res.render('home/index');
};

const login = (req, res)=>{
    res.render('home/login');
};

//모듈화를 통해 index.js 에서 사용
module.exports = {
    home,
    login,
};
