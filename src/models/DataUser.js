const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataUser = new Schema({
    email: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true})

// module.exports = mongoose.model('nama_model','format_model)

module.exports = mongoose.model('DataUser',DataUser)
