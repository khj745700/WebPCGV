const mongoose = require('mongoose');

const {Schema, Types, model} = mongoose;

const CommentLikeSchema = new Schema({
    user_id:{
        type: Types.ObjectId,
        required : true,
        ref: 'user'
    },
    comment_id:{
        type: Types.ObjectId,
        required : true,
        ref: 'comment'
    }
});

const CommentLike = model('commentlike', CommentLikeSchema);
module.exports = { CommentLike };