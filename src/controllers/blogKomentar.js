const blogVideo = require("../models/blogVideo");
const dataVideo = require("../models/dataVideo");
const Komentar = require("../models/Komentar");


exports.createKomentar = (req, res, next) => {
    const id_blog_video = req.body.id_blog_video;
    const id_user = req.body.id_user;
    const isi_komentar = req.body.isi_komentar;

    const buat_komentar = new Komentar({
        id_blog_video: id_blog_video,
        id_user: id_user,
        isi_komentar: isi_komentar,
    })
    buat_komentar.save().then(result => {
        res.status(201).json({
            message: 'Create Komentar Suuccess',
            data: result
        });
        next()
    })
}

exports.getKomentar = (req, res, next) => {
    const id = req.params.postId;

    blogVideo.findById(id)
        .then(result => {
            dataVideo.find({ id_blog_video: id }).then(datavideo => {
                if (!result) {
                    const err = new Error('ID Tidak Di Temukan');
                    error.errorStatus = 404;
                    throw error;
                }
                else {
                    res.status(200).json({
                        message: 'Data Blog Post By ID Berhasil Di Panggil',
                        data: {
                            data:result,
                            sub_video:[
                                datavideo
                            ]
                        }
                    });
                }
            })

        })
        .catch(err => {
            next(err);
        })
}
