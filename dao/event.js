const mongoose = require("mongoose");
const { Types, model, Schema } = mongoose;

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        period: {
            type: String,
            required: true
        },
        image:{
            type: String,
            required: true
        }
    }
)

const Event = model('event', EventSchema);
module.exports = { Event };