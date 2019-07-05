const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const update = multer({
    dest: './tmp'
});
const url = "mongodb://127.0.0.1:27017/taopp";
//引入controllers
const userController = require('./controllers/user.js');
const server = express();
//连接 mongodb 
mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log("连接数据库成功 🤟");
    })
    .catch(error => {
        console.log(error);
        console.log("连接数据库失败 ☠");
    })


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static("public"));
server.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers","content-type");
  next();
});

//路由的设置
server.post("/sign-up", userController.postSignUp); // 注册
server.post("/sign-in", userController.postSignIn); // 登录
server.post(
  "/user/profile",
  update.single("avatar"),
  userController.postUpdAvatar
);

server.listen(7777);