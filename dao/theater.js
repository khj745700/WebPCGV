const moongose = require('mongoose');
const { Types, model, Schema } = moongose;

const TheaterSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        screens:[
            {
                type: Types.ObjectId,
                ref: 'screen'
            }
        ]
    }
)

const Theater = model( 'theater', TheaterSchema);
module.exports = { Theater };