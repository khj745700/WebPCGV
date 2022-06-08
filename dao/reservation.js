const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const ReservationSchema = new Schema(
    {
        user_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'user'
        },
        screen_table_id: {
            type: Types.ObjectId,
            required: true,
            ref: 'screenTable'
        }
    },
    {timestamps: { createdAt: 'created_date'}}
);

const reservation = model('reservation', ReservationSchema);
module.exports = { reservation };