var mongoose = require('mongoose');

const UbicacionSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: Object
    },
    user: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    company: {
        type: String
    },
    tags: {
        type: [String]
    }
});

module.exports = mongoose.model('Ubicaciones', UbicacionSchema, "Ubicaciones");