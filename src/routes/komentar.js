const express = require('express');

const router = express.Router();

const blogKomentar  = require('../controllers/blogKomentar');

const {authenticate,authRole}    =  require('../controllers/middleware/authenticate')


router.post('/post-komentar',authenticate,authRole('user'),blogKomentar.buatKomentar);
router.get('/post-komentar/:postId',blogKomentar.ambilKomentar);



module.exports = router;
