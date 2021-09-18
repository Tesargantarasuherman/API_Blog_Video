const express = require('express');

const router = express.Router();

const blogKomentar  = require('../controllers/blogKomentar');

router.post('/post-komentar',blogKomentar.buatKomentar);
router.get('/post-komentar/:postId',blogKomentar.ambilKomentar);



module.exports = router;
