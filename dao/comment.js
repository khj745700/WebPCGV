const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const commentSchema = new Schema(
    {
        user_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'user'
        },
        score: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        movie_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'movie'
        }
    },
    {
    timestamps: { createdAt : 'created_date'}
    });

const Comment = model("comment", commentSchema);
module.exports = { Comment };