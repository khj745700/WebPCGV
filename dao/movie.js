const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const MovieSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        runtime: {
            type: Number,
            required: true
        },
        open_date: {
            type: Types.Date,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        total_score: {
            type: Number,
            default: 0,
        },
        reservation_percent: {
            type: Number,
            default: 0,
        },
        actors: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        limit_age: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true
        }

    }
)

const Movie = model("movie", MovieSchema);
module.exports = { Movie };