
function getUserById(req,res,next)
{
    res.json({
        userId: req.params.userId
    });
}
module.exports = {
    getUserById,
}