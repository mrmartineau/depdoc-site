var express = require('express');
var router = express.Router();
var depdoc = require('depdoc');
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Depdoc - Auto-generate documentation using your package.json\'s dependencies property' });
});

/* POST returns depdoc. */
router.post('/depdoc', function(req, res, next) {
	var result = depdoc(req.body, 'json');
	// console.log(result);

	// fs.writeFile('depdoc.md', result, function (err) {
	// 	if (err) throw err;
	// 	console.log('It\'s saved!');
	// });
	// res.setHeader('content-type', 'text/x-markdown');
	// res.setHeader('content-disposition', 'attachment; filename=depdoc.md');

	res.send(result);
	res.end();
});

module.exports = router;
