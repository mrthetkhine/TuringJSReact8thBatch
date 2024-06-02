var express = require('express');
var users= require('./../controller/UsersController');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('First route');
  res.send('respond with a resource');
  //next();
});

router.get('/file', function(req, res, next) {
  console.log('getFile ',path.resolve(__dirname+'./../public/static/hello.txt'));
  res.download('./public/static/hello.txt');
  //next();
});
router.get('/redirect', function(req, res, next) {
  console.log('redirect route');
  res.redirect('/login');

});

router.get('/:userId', users.getUserById,function(req,res,next)
{
  console.log('Second handler');

});
router.get('/one', function(req, res, next) {
  console.log('user one route');
  res.send('respond with a resource');
});
router.get('/ab?cd', function(req, res, next) {
  console.log('user /ab?cd');
  res.send('/ab?cd');
});
router.post('/', function(req, res, next) {
  console.log('Req ',req);
  res.json({
    name:'User'
  });
});
module.exports = router;
