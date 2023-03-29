var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Accessible Multimedia Web Player', content: 'this is ' });
});

router.get('/video', (req, res) => {
res.sendFile(__dirname + '/video.html');
});

router.get('/audio', (req, res) => {
res.sendFile(__dirname + '/audio.html');
});


module.exports = router;
