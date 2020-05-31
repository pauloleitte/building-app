const {
    Schema,
    model
} = require('mongoose');

const restful = require('node-restful')

const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    percent: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
}, {
    timestamps: true
});

module.exports = restful.model('Activity', ActivitySchema)