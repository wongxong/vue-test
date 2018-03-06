var express = require('express');
var config = require('./config/index');

var port = 3000;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

router.post('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var testData = require('./test-data.json');

var apiRoutes = express.Router()

apiRoutes.get(url, function(req, res){
  res.json({data: testData, code: 200})
})

apiRoutes.get(url, function(req, res){
  res.json({data: testData})
})

app.use('/', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});
