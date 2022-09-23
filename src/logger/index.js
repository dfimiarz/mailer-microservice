
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

//Log LOG_DIR when in development mode
if( process.env.NODE_ENV == "development"){
    console.log("LOG_DIR: ",process.env.LOG_DIR)
}

// Logger configuration
const logConfiguration = {
    transports: [
        new transports.File({
            level: 'info',
            filename: `${process.env.LOG_DIR}/combined.log`,
            format: combine(
                timestamp(),
                myFormat
              ),
        }),
        new transports.File({
            level: 'error',
            filename: `${process.env.LOG_DIR}/error.log`,
            format: combine(
                timestamp(),
                myFormat
              ),
        }),
        new transports.Console({
            format: combine(
                timestamp(),
                myFormat
              )
        })
    ]
};

// Create the logger
const logger = createLogger(logConfiguration);

module.exports = logger;

