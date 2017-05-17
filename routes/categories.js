var express = require('express');
var fs = require('fs');
var util = require('util');
var router = express.Router();

/** Proceed categories and write to a file as a JSON */
router.post('/', function (req, res, next) {

    console.log(req.body); // true
    console.log(JSON.stringify(req.body)); // true
    fs.writeFileSync('db/categoriesChoice.json', JSON.stringify(req.body) , 'utf-8');

    console.log("The file was saved!");
    res.redirect(301, 'maps');
});

module.exports = router;