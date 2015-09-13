var express = require('express');
var router = express.Router();
var depdoc = require('depdoc');

/* POST returns shims. */
router.post('/depdoc', function(req, res, next) {
	// var depdocOutput = depdoc(req.body.input);
	var result = depdoc.getPackageInformation(req.body.packageInput);
	console.log(result);

	// res.setHeader('content-type', 'text/javascript');
	// res.setHeader('content-disposition', 'attachment; filename=shimly.js');
	// res.end(code);
});

module.exports = router;
