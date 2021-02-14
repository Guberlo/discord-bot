const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    token:  process.env.TOKEN,
    prefix: process.env.PREFIX,
    spoon_api: process.env.SPOON_API_KEY,
    nasa_api: process.env.NASA_API_KEY
};