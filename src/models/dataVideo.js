const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataVideo = new Schema({
    
    id_blog_video:{
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link_video:{
        type : String,
        required: true
    }
}, {timestamps: true})

// module.exports = mongoose.model('nama_model','format_model)

module.exports = mongoose.model('dataVideo',dataVideo)
