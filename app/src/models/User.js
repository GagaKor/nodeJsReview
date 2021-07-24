"use strict";

const {response} = require("express");
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

 async login() {
    const client = this.body;
    const { id, password } = await UserStorage.getUserInfo(client.id);
  try{
    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
    }catch(err){
      return {success : false, msg: err};
    }
  }

  async register(){
    const client = this.body;
    console.log(client);
    try{
     const response = await UserStorage.save(client);
     return response;
    }catch(err){
      return{success : false, msg : err};
    }
  }
}

module.exports = User;