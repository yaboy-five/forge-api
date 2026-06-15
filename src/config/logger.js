const {
    createLogger,
    transports,
    format
} = require('winston');
require('winston-mongodb');

const {
    combine, timestamp, printf, colorize, errors
} = format;

const config = require('../config');

const logger = createLogger({
    transports:[
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.MongoDB({
            level: 'error',
            db: process.env.MongoDB,
            options: { useUnifiedTopology: true },
            collection: 'foodforge',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
});




module.exports = logger;