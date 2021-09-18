const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Komentar = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
}, {timestamps: true})

// module.exports = mongoose.model('nama_model','format_model)

module.exports = mongoose.model('Komentar',Komentar)
