var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('First route');
  res.send('respond with a resource');
  next();
});

function getByIdHandler(req, res, next) {
  console.log('get user with id');
  /*res.json({
    userId: req.params.userId
  });*/
  next();
}

router.get('/:userId', getByIdHandler,function(req,res,next)
{
  console.log('Second handler');
  res.json({
    userId: req.params.userId
  });
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
