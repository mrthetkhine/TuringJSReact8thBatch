var express = require('express');
var router = express.Router();
var movies = require('./../controller/MovieController');

router.get('/', movies.getAllMovie);
router.get('/:movieId', movies.getMovieById);
router.get('/title/:title',movies.findMovieByTitle);
router.post('/',movies.newMovie);
router.put('/:movieId',movies.updateMovie);
router.delete('/:movieId',movies.deleteMovie);

module.exports = router;