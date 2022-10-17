const logger = require('../logger');

const simpleEmailHandler = async function(config){

    const job_name = config.job_name;

    try{

        const data = config.data;

        const template = config.templateId;

        const transporter = getTransporter();

        const messsageText = getMessageText(template,data);

        const result = await sendMessage(transporter,data.to,messsageText)

    }
    catch( error ){
        logger.err(`Job ${job_name} failed`);

        const err = new Error(`${job_name} failed`);
        err.status = 500;

        throw err;
    }

}

module.exports = {
    simpleEmailHandler
}