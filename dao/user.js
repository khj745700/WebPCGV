const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        login_id: {
            type: String,
            required: true,
            unique : true
        },
        name : {
          type: String,
          required: true
        },
        password: {
            type: String,
            required: true
        },
        comments:[{
            type: Types.ObjectId,
            ref: 'comment'
        }],
        reservations:{
            type: Types.ObjectId,
            ref: 'reservation'
        },
        commentLikes:[
            {
                type: Types.ObjectId,
                ref: 'commentlike'
            }
        ]
    },
    {timestamps: {createdAt:'created_date'}}
)

const User = model('user' ,UserSchema);
module.exports = { User };
