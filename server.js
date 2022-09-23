'use strict'

require('dotenv').config();
const app = require('./src/app');
const http = require('http');

const PORT = process.env.PORT || 8082

const app_name = process.env.APP_NAME;

const dev_flag = process.env.NODE_ENV;

http.createServer(app).listen(PORT, () => {
    console.log(`\x1b[33m"${app_name}"\x1b[0m running on port \x1b[33m${PORT}\x1b[0m in \x1b[33m${dev_flag}\x1b[0m mode`);
    console.log(`Press Ctrl+C to quit`);
})