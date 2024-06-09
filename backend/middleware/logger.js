
function customLog(req,res,next)
{
    req.requestTime = Date.now();
    console.log('CustomLog>> ',req.url);
    next();
    /*
    res.status(400).json({
        message: 'Bad request by middleware'
    });*/
}
module.exports.logger = customLog;