const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/image.data.js');


router.get('/', (req, res) => {
    res.send(galleryItems);
});

module.exports = router;