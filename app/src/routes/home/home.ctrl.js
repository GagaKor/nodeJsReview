"use strict";
const logger = require("../../config/logger");
const User = require("../../models/User");

//contoller 부분
const output = {
  home: (req, res) => {
    logger.info(`GET / 304 홈으로 이동`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET / 304 로그인 화면으로 이동`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET / 304 회원가입 화면으로 이동`);
    res.render("home/register");
  },
};
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.err)
      logger.error(
        `POST / login 200 Response : "success: ${response.success}, msg: ${response.err}`
      );
    else
      logger.info(
        `POST / login 200 Response : "success: ${response.success}, msg: ${response.msg}`
      );
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
      );
    else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  },
};

//모듈화를 통해 index.js 에서 사용
module.exports = {
  output,
  process,
};
