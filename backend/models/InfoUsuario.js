const { Schema, model } = require('mongoose');

const InfoUsuarioSchema = Schema({

    network: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    status: {
        index: {
            type: String,
            required: true,
        },
        today: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        followersOrSubs: {
            type: String,
            required: true,
        }
    }

});

InfoUsuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('InfoUsuario', InfoUsuarioSchema);