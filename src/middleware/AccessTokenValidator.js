const logger = require('./../logger/index');

/**
 * 
 * @param { Request } req 
 * @param { Response } res 
 * @param { Function} next 
 */

function checkAccessToken(req, res, next) {

    const accessKey = req.headers.authorization;

    if (!accessKey) {
        logger.log('warn',"SECURITY: Missing Access Token");
        return res.status(401).send("Missing Access Token");
    }
    else if (accessKey === process.env.ACCESS_TOKEN_SECRET) {
        next();
    }
    else{
        logger.log('warn',"SECURITY: Invalid Access Token");
        return res.status(401).send("Access token error");    
    }

}

exports.checkAccessToken = checkAccessToken