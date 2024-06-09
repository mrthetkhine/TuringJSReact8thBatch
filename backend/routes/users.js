var express = require('express');
var router = express.Router();
var users = require('./../controller/UsersController');
/*
router.get('/', function(req, res, next) {
  console.log('First');
  console.log(req.headers);
  //res.send('respond with a resource');
  next();
});
router.get('/', function(req, res, next) {
  console.log('Second');
  res.send('<h1>Hello</h1>');
});
router.get('/ab?cd', function(req, res, next) {
  console.log('ab?cd');
  res.send('<h1>ab?cd</h1>');
});
router.get('/ab+cd', function(req, res, next) {
  console.log('ab+cd');
  res.send('<h1>ab+cd</h1>');
});
*/
router.get('/:userId', users.getUserById);
router.post('/', users.registerUser);
router.post('/login', users.login);
module.exports = router;
