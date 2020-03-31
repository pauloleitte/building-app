const {Schema, model} = require('mongoose');

const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: true
    },
},  {
        timestamps: true
});

module.exports = model('Activity', ActivitySchema)