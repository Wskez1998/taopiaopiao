const UserModel = require('../models/User');
const fs = require('fs');
const path = require('path');

//登录
const postSignIn = (req, res) => {
    UserModel.findOne(req.body)
        .then((data) => {
            if(data) {
                res.send({
                    code: 0,
                    msg: 'ok',
                    data: {
                        userId: data._id,
                        nickname: data.nickname,
                        avatar: data.avatar
                    }
                })
            }else {
                res.send({
                    code: -1,
                    msg: '用户名或密码错误'
                })
            }
        })
        .catch(error => {
            res.send({
                code: -1,
                msg: error.message
            })
        })
};

//注册
const postSignUp = (req, res) => {
    const user = new UserModel(req.body);
    let username = user.username;
    UserModel.find({'username': username}).then(data => {
      if(data.length != 0) {
        res.send({
          code: -1,
          msg: '用户名已被注册，请重新输入'
        })
      } else {
        user
        .save()
        .then(() => {
            res.send({
                code: 0,
                msg: "ok"
            });
        })
        .catch(error => {
            res.send({
                code: -1,
                msg: error.message
            });
        });
      }
    })
};

//更换头像
const postUpdAvatar = (req, res) => {
    let newFileName = new Date().getTime() + "_" + req.file.originalname;
    let newPath = path.resolve(__dirname, "../public/", newFileName);
    let fileData = fs.readFileSync(req.file.path);
    fs.writeFileSync(newPath, fileData);
    let userId = req.body.userId;
    let newAvatar = `http://localhost:7777/${newFileName}`;
    UserModel.updateOne(
      {
        _id: userId
      },
      {
        avatar: newAvatar
      }
    )
      .then(data => {
        if (data.nModified > 0) {
          res.send({
            code: 0,
            msg: "头像更新成功",
            data: newAvatar
          });
        } else {
          res.send({
            code: -1,
            msg: "网络原因，头像更新失败!"
          });
        }
      })
      .catch(error => {
        res.send({
          code: -1,
          msg: error.message
        });
      });
  };

module.exports = {
  postSignIn,
  postSignUp,
  postUpdAvatar
}