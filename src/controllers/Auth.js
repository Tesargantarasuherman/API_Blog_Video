const DataUser = require("../models/DataUser");
const bcrypt = require('bcryptjs');


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
                        nama :req.body.nama,
                        email:req.body.email,
                        password:hashedPass,
                    })
                    UserPost.save().then(result =>{
                        res.status(201).json({
                            message : 'Registrasi Berhasil',
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