var reviewService = require('./../service/ReviewService')
const getAllReview = async (req,res,next)=>{
    try {
        const reviews = await reviewService.getAllReview();
        if(!reviews) throw Error('No reviews');
        await res.status(200).json(reviews);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const getReviewById = async (req,res,next)=>{
    try {
        let reviewId = req.params['reviewId'];
        const review = await reviewService.getReviewById(reviewId);
        if(!review) throw Error('No review');
        await res.status(200).json(review);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const getReviewByMovieId = async (req,res,next)=>{
    try {
        let movieId = req.params['movieId'];
        const review = await reviewService.getReviewByMovieId(movieId);
        if(!review) throw Error('No review');
        await res.status(200).json(review);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
};
const saveReview = async (req,res,next)=>{
    try {
        const body = req.body;
        const review = await reviewService.saveReview(body);
        if(!review) throw Error('review cannot be saved');
        await res.status(201).json(review);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const updateReview = async function (req,res,next)
{
    let reviewId = req.params['reviewId'];
    let review = req.body;
    console.log(`update review ${reviewId} `,req.body);
    try {
        const updateReview = await reviewService.updateReview(reviewId,review);
        console.log('Updated Review ',updateReview);
        if(!updateReview) throw Error('Cannot update Review');
        await res.status(200).json(updateReview);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
const deleteReview = async (req,res,next)=>{
    let reviewId = req.params['reviewId'];
    try {
        const deleteReview = await reviewService.deleteReview(reviewId);
        if(!deleteReview) throw Error('Cannot delete review');
        await res.status(200).json(deleteReview);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
}
module.exports = {
    getAllReview,
    getReviewById,
    getReviewByMovieId,
    saveReview,
    updateReview,
    deleteReview,

}
