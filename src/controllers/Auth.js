const DataUser = require("../models/DataUser");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


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
exports.login = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;

    DataUser.findOne({email: email})
    .then(user=>{
          if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error : err
                    });
                }
                if(result){
                   let token = jwt.sign({role:'user'},'secretValue',{expiresIn:'1h'}) 
                   res.json({
                       message:'Login Successfull',
                       data:user,
                       token
                   })
                }else{
                    res.json({
                        message:'Password Does no Matched!',
                    })
                }
            })
          }else{
            res.json({
                message : 'User Not Found',
            });
          }
      })
}