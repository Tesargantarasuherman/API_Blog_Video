const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Komentar = new Schema({
    id_blog_video: {
        type: String,
        required: true
    },
    data_user: {
        type: Object,
        required: true
    },
    isi_komentar: {
        type: String,
        required: true
    },
}, {timestamps: true})

// module.exports = mongoose.model('nama_model','format_model)

module.exports = mongoose.model('Komentar',Komentar)
