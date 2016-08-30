var express = require('express');
var router = express.Router();

var key = process.env.KEY;

var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + key)
    .end(function (response) {
      console.log(response.body);
    })
  res.render('index', { title: 'Express' });
});




module.exports = router;
