let userService = require('../service/UserService');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async function( req,res,next)
{
    let userName = req.body['userName'];
    let password = req.body['password'];
    try
    {
        let user = await userService.register(userName,password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    }
    catch (err) {
        console.log(err)
        res.status(400).send({message:"User already existed"});
    }

}
const login = async function(req,res,next)
{
    let userName = req.body['userName'];
    let password = req.body['password'];
    try
    {
        let user = await userService.login(userName,password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    }
    catch (err) {
        console.log(err)
        res.status(401).send({message:"Invalid user"});
    }
}
const getUserById = async function (req, res, next) {
    console.log('Req ',req.params);
    let userId = req.params.userId;
    let user = userService.getUserById(userId);
    return res.status(200).json(user);
}

module.exports = {
    getUserById,
    registerUser,
    login,
}