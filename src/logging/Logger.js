const winston = require('winston');
const fs = require('fs');

const logDir = './logs';

winston.setLevels(winston.config.npm.levels);
winston.addColors(winston.config.npm.colors);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: `${logDir}/Geminus.log`,
      handleExceptions: true,
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new winston.transports.Console({
      level: 'silly',
      json: false,
      colorize: true,
    }),
  ],
});

module.exports = logger;
