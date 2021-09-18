const blogVideo = require("../models/blogVideo");
const DataUser = require("../models/DataUser");
const Komentar = require("../models/Komentar");


exports.buatKomentar = (req, res, next) => {
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

exports.ambilKomentar = (req, res, next) => {
    let id = req.params.postId;
    let data_komentar = new Object();
    var data = [];
    let response_data =[]

    Komentar.find({ id_blog_video: id })
        .then(result => {
            result.forEach((res_data) => {
                DataUser.find({ _id: res_data.id_user }).then((data_user) => {
                    data_user.forEach(user=>{
                        data_komentar.nama = user.nama
                        data_komentar.isi_komentar =res_data.isi_komentar

                    })

                   data.push(data_komentar)
                    console.log(data)
                })
            })

            res.status(200).json({
                message: 'Data Komentar Berhasil Di Panggil',
                data: data
            });
        })
        .catch(err => {
            next(err);
        })
}
