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
            type: Buffer,
            contentType: String
        }
    }
);
const Poster = model('poster', PosterSchema);
module.exports = { Poster };