const express = require('express');
const router = express.Router();
const { Comment } = require('../../dao/comment');
const { User } = require('../../dao/user');
const { Movie } = require('../../dao/movie');
const cors = require("cors");

router.post("/:movieId", cors(), async (req, res) => {
    const movieId = req.params.movieId;
    const userId = req.query.userId;
    const content = req.query.content;
    const score = req.query.score;

    const user = await User.findOne({
        login_id : userId
    });

    const movie = await Movie.findOne({
        _id : movieId
    });

    const comment = await new Comment(
        {
            user_id : user._id,
            movie_id : movie._id,
            content : content,
            score : score
        }
    );

    await comment.save(async (err, comment)=>{
        await movie.comments.push(comment._id);
        await user.comments.push(comment._id);
        await movie.save();
        await user.save();
    });
    await res.send(comment);
});

router.get("/:movieId", cors(), async (req, res)=>{
    const movieId = req.params.movieId;

    const comments = await Comment.find({movie_id : movieId}).populate('user_id', 'login_id');
    await res.send(comments);
});

router.patch("/:commentId", cors(), async(req, res)=>{
    const commentId = req.params.commentId; //ObjectId
    const score = req.query.score;
    const userId = req.query.userId; // loginId
    const content = req.query.content;

    if(score == null && content == null ){
        res.send("수정해야할 데이터가 없습니다.");
    }


    await Comment.findOne({ _id : commentId }).exec().then(
        async (data,err) =>{
            data.score = (score == null) ? data.score : score ;
            data.content = (content == null) ? data.content : content;
            await data.save();
            res.send("ok");
        }
    );
} );

module.exports = router;