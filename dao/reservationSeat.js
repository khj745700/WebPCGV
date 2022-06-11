const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const ReservationSeatSchema = new Schema(
    {
        seat_id:{
            type:Types.ObjectId,
            ref: 'seat'
        },
        reservation_id:{
            type:Types.ObjectId,
            ref: 'reservation'
        },
        screenTable_id:{
            type : Types.ObjectId,
            required: true,
            ref: 'screenTable'
        },
        isReservationable:{
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : {createdAt:'created_date'}
    }
)

const ReservationSeat = model('reservationSeat', ReservationSeatSchema);

module.exports = { ReservationSeat };