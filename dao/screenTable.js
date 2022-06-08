const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const ScreenTableSchema = new Schema(
    {
        screen_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'screen'
        },
        movie_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'movie'
        },
        start_time:{
            type: Schema.Types.Date,
            required: true
        },
        end_time: {
            type: Schema.Types.Date,
            required: true
        },
        reservationable_seat_num: {
            type: Number,
            required: true
        }
    }
)

const screenTable = model('screenTable',ScreenTableSchema);
module.exports = { screenTable };