const mongoDB = require('mongoose')

const userSchema = new mongoDB.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        default: '桃子星人'
    },
    avatar: {
        type: String,
        default: 'http://localhost:7777/avatar.jpg'
    },
    relos: {
        type: Number,
        default: 2
    }
})

module.exports = mongoDB.model("user", userSchema)