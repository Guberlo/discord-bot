const axios = require('axios').default;
const Discord = require('discord.js');
const { nasa_api } = require('../config');

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + nasa_api;

module.exports = {
    name: 'mars',
    description: 'Data gathered by NASA\'s Curiosity, Opportunity, and Spirit rovers on Mars.',
    async execute(message, args) {
        try {
            let response = (await axios.get(url)).data.photos;
            let index = Math.floor(Math.random() * response.length);

            let nasaEmbed = new Discord.MessageEmbed()
             .setColor('#8a2c0c')
             .setTitle(response[index].camera.full_name)
             .setAuthor(response[index].rover.name)
             .setThumbnail(response[index].img_src)
             .setImage(response[index].img_src)
             .setTimestamp(response[index].earth_date)
             .setFooter('Scraccato da https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/');

            message.channel.send(nasaEmbed);
        } catch (error) {
            console.error('Error on sending mars pic: ', error);
            message.reply('AIA :rocket: :boom:  hai fatto sfallire pure la NASA');
        }
    }
}