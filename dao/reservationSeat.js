const mongoose = require("mongoose");
const { Types, Schema, model } = mongoose;

const ReservationSeatSchema = new Schema(
    {
        user_id:{
          type : Types.ObjectId,
          required: true,
          ref: 'user'
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