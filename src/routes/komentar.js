const express = require('express');

const router = express.Router();

const blogVideoController  = require('../controllers/blogVideoController');

router.get('/all',blogVideoController.indexBLogVideo);
router.post('/post',blogVideoController.createBLogVideo);
router.post('/post/video',blogVideoController.addChildBLogVideo);
router.get('/post/:postId',blogVideoController.getByIDBLogVideo);


module.exports = router;
