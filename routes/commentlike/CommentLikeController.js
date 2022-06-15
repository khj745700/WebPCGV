const express = require('express');
const router = express.Router();
const cors = require('cors');
const {User} =require('../../dao/user');
const {Comment} = require('../../dao/comment');
const {CommentLike} = require('../../dao/commentlike');

router.post("/:commentId", cors(), async (req, res)=> {
    const userId = req.query.userId;
    const commentId = req.params.commentId;
    const comment = await Comment.findOne({_id : commentId});
    const findUser = await User.findOne({login_id : userId});

    const findCommentLike = await CommentLike.findOne({comment_id : commentId, user_id : findUser._id}).exec().then(async (data)=>{
        if(data == null){
            const commentLike = await new CommentLike(
                {
                    user_id : findUser._id,
                    comment_id : comment._id
                }
            );
            await commentLike.save(async (err,data)=>{
                await findUser.commentLikes.push(data._id);
                await comment.commentLikes.push(data._id);
                comment.likes += 1;
                await findUser.save();
                await comment.save();
                await res.send("ok");
            });
        }else{
            res.send("이미 좋아요를 눌렀습니다.");
        }
    });

});

module.exports = router;