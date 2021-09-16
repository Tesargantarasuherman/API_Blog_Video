const blogVideo = require("../models/blogVideo");
const dataVideo = require("../models/dataVideo");

exports.indexBLogVideo = (req, res, next) => {
    res.status(201).json({
        message: 'Create Blog Success',
        data: {
            author: {
                user_id: 1,
                name: 'lorem'
            }
        }
    });
    next()
}
exports.createBLogVideo = (req, res, next) => {
    const title = req.body.title;
    const genre = req.body.genre;

    const Posting = new blogVideo({
        title: title,
        genre: genre,
    })
    Posting.save().then(result => {
        res.status(201).json({
            message: 'Create Video Success',
            data: result
        });
        next()
    })
}
exports.addChildBLogVideo = (req, res, next) => {
    const id_blog_video = req.body.id_blog_video;
    const title = req.body.title;
    const description = req.body.description;
    const link_video = req.body.link_video;

    const Posting = new dataVideo({
        id_blog_video: id_blog_video,
        title: title,
        description: description,
        link_video: link_video,
    })
    Posting.save().then(result => {
        res.status(201).json({
            message: 'Create Child Video Success',
            data: result
        });
        next()
    })
}
exports.getByIDBLogVideo = (req, res, next) => {
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
