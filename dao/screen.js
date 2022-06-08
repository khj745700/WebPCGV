const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const ScreenSchema = new Schema(
    {
        theater_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'theater'
        }

        ,
        screen_num: {
            type: Number,
            required: true
        },
        row: {
            type: Number,
            required: true
        },
        col:{
            type: Number,
            required: true
        },
        stairs: {
            type: Number,
            required: true
        },
        total_seat: {
            type: Number,
            required: true
        }
    }
)

const Screen = model('screen', ScreenSchema);
module.exports = { Screen };