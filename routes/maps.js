var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(Object.keys(req.query));
    res.render('maps',{ category: Object.keys(req.query)[0] });
});

module.exports = router;
