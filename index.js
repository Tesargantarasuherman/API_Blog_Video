const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParsers = require('body-parser')

const blogVideo = require('./src/routes/blogVideo');
const komentar = require('./src/routes/komentar');
const auth = require('./src/routes/auth');

app.use(bodyParsers.urlencoded({ extended: true }))

app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    next();
})

app.use('/v1/blog', blogVideo);
app.use('/v1/komentar', komentar);
app.use('/v1/auth', auth);
mongoose.connect('mongodb+srv://iamsuherman:67poqfe8i7oyT3UQ@cluster0.tbtsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(3000, () => console.log('Connection Success'));
}).catch(err => console.log(err));
