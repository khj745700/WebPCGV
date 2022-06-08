const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const ScreenSchema = new Schema(
    {
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

const screen = model('screen', ScreenSchema);
module.exports = { screen };