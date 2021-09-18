const DataUser = require("../models/DataUser");


exports.register = (req, res, next) => {

    DataUser.findOne({email: req.body.email})
    .then(user=>{
            if(user){
                res.json({
                    message:'User Sudah Terdaftar',
                })
            }
            else{
                bcrypt.hash(req.body.password,10,function(err, hashedPass){
                    if(err){
                        res.json({
                            error : err
                        });
                    }
                    let UserPost = new DataUser({
                        name :req.body.name,
                        email:req.body.email,
                        password:hashedPass,
                    })
                    UserPost.save().then(result =>{
                        res.status(201).json({
                            message : 'Create User Success',
                            data:result
                        });
                        next()
                    })
                    .catch(err =>{
                        next(err);
                    })
                })
            }
    })
}

exports.ambilKomentar = (req, res, next) => {
    const id = req.params.postId;

    Komentar.find({'id_blog_video':id})
        .then(result => {
            // dataVideo.find({ id_blog_video: id }).then(datavideo => {
                if (!result) {
                    const err = new Error('ID Tidak Di Temukan');
                    error.errorStatus = 404;
                    throw error;
                }
                else {
                    res.status(200).json({
                        message: 'Data Komentar Berhasil Di Panggil',
                        data: {
                            data:result,
                            // sub_video:[
                            //     datavideo
                            // ]
                        }
                    });
                }
            })

        // })
        .catch(err => {
            next(err);
        })
}
