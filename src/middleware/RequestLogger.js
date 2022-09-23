const logger = require('./../logger/');

/**
 * 
 * @param { Request } req 
 * @param { Response } res 
 * @param { Function} next 
 */

function logRequests(req, res, next) {

    logger.log('info',`REQUEST - IP: ${req.ip}, Request: ${JSON.stringify(req.body)} ` )
    next();

}

exports.logRequests = logRequests