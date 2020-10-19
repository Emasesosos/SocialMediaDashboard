const { Schema, model } = require('mongoose');

const InfoCardSchema = Schema({

    network: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    views: {
        type: String,
        required: true,
    },
    percent: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }

});

InfoCardSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('InfoCard', InfoCardSchema);