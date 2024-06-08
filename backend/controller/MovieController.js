var movieService = require('./../service/MovieService')

const handle = function(func,httpErrorCode)
{
    return async function(req,res,next)
    {
        try
        {
            func(req,res,next).catch(err=> {
                return res.status(httpErrorCode).json({message: err})
            });
        }catch (err)
        {
            console.log("Error is ",err);
            await res.status(httpErrorCode).json({message: err})
        }
    }

}
async function getAllMovieHandler(req,res,next)
{
    const movies = await movieService.getAllMovie();
    if(!movies) throw Error('No movies');
    await res.status(200).json(movies);
}
const getAllMovie = async function (req, res, next) {
    console.log('Movie controller user ',req.user);

    await handle(getAllMovieHandler,400)
          (req,res,next);

}
async function getMovieByIdHandler(req,res,next)
{
    let movieId = req.params['movieId'];
    console.log('Req movie Id ', movieId);
    const movies = await movieService.getMovieById(movieId);
    if(!movies) throw Error('No movies found');
    await res.status(200).json(movies);

}
const getMovieById = async function (req,res,next)
{
    await handle(getMovieByIdHandler,404)
                (req,res,next);
}
const findMovieByTitle = async function (req,res,next)
{
    let title = req.params['title'];
    try {
        const movies = await movieService.searchMovieByTitle(title);
        if(!movies) throw Error('No movies found');
        await res.status(200).json(movies);

    }catch(err)
    {
        await res.status(404).json({message: err})
    }
}

const newMovie = async function(req,res,next)
{
    console.log("new movie ",req.body);
    try {
        const movie = await movieService.newMovie(req.body);
        if(!movie) throw Error('Cannot save movie');
        await res.status(201).json(movie);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }
}

const updateMovie = async function (req,res,next)
{
    let movieId = req.params['movieId'];
    let movie = req.body;
    console.log(`new movie ${movieId} `,req.body);
    try {
        const updateMovie = await movieService.updateMovie(movieId,movie);
        if(!updateMovie) throw Error('Cannot update movie');
        await res.status(200).json(updateMovie);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const deleteMovie = async (req,res,next)=>{
    let movieId = req.params['movieId'];
    try {
        const deletedMovie = await movieService.deleteMovie(movieId);
        if(!deletedMovie) throw Error('Cannot delete movie');
        await res.status(200).json(deletedMovie);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}

module.exports = {
    getAllMovie,
    getMovieById,
    findMovieByTitle,
    newMovie,
    updateMovie,
    deleteMovie,
}
