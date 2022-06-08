const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const SeatSchema = new Schema(
    {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        },
        isAble: {
            type: Boolean,
            default: true
        },
        reason: {
            type: String
        }
    }
)

const Seat = model('seat', SeatSchema);
module.exports = { Seat };