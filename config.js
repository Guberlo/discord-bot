const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    token:  process.env.TOKEN,
    prefix: process.env.PREFIX
};