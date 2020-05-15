const {
    Schema,
    model
} = require('mongoose');

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

module.exports = model('Activity', ActivitySchema)