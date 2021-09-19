const blogVideo = require("../models/blogVideo");
const DataUser = require("../models/DataUser");
const Komentar = require("../models/Komentar");


exports.buatKomentar = (req, res, next) => {
    const id_blog_video = req.body.id_blog_video;
    const id_user = req.body.id_user;
    const isi_komentar = req.body.isi_komentar;

    DataUser.findById(id_user).then(user => {
        data_user = user

        const buat_komentar = new Komentar({
            id_blog_video: id_blog_video,
            data_user: user,
            isi_komentar: isi_komentar,
        })
        buat_komentar.save().then(result => {
            res.status(201).json({
                message: 'Create Komentar Suuccess',
                data: result
            });
            next()
        })
    });
}

exports.ambilKomentar = (req, res, next) => {
    let id = req.params.postId;

    Komentar.find({ id_blog_video: id })
        .then(result => {
            res.status(200).json({
                message: 'Data Komentar Berhasil Di Panggil',
                data: result
            });
        })
        .catch(err => {
            next(err);
        })
}
