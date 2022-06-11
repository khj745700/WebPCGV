const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const PosterSchema = new Schema(
    {
        movie_id:{
            type: Types.ObjectId,
            required : true,
            ref : 'movie'
        },
        image:{
            type: String,
            required: true
        }
    }
);
const Poster = model('poster', PosterSchema);
module.exports = { Poster };