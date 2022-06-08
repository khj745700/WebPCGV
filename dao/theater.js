const moongose = require('mongoose');
const { Types, model, Schema } = moongose;

const TheaterSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        }
    }
)

const Theater = model( 'theater', TheaterSchema);
module.exports = { Theater };