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
        },
        reservation_seats:[{
            type:Types.ObjectId,
            ref: 'reservationSeat'
        }]
    },
    {timestamps: { createdAt: 'created_date'}}
);

const Reservation = model('reservation', ReservationSchema);
module.exports = { Reservation };