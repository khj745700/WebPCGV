const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        login_id: {
            type: String,
            required: true
        },
        password: {
            type: String,
            requried: true
        }
    },
    {timestamps: {createdAt:'created_date'}}
)

const user = model('user' ,UserSchema);
module.exports = { user };