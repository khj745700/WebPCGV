const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        login_id: {
            type: String,
            required: true,
            unique : true
        },
        password: {
            type: String,
            requried: true
        }
    },
    {timestamps: {createdAt:'created_date'}}
)

const User = model('user' ,UserSchema);
module.exports = { User };