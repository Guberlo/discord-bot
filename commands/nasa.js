const axios = require('axios').default;
const Discord = require('discord.js');
const { nasa_api } = require('../config');

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + nasa_api;

module.exports = {
    name: 'nasa',
    description: 'Astronomy Picture of the Day',
    async execute(message, args) {
        try {
            let response = (await axios.get(url)).data;
            let nasaEmbed = new Discord.MessageEmbed()
             .setColor('#732694')
             .setTitle(response.title)
             .setURL(response.url)
             .setAuthor(response.copyright || 'No Copyright')
             .setDescription(response.explanation)
             .setThumbnail(response.url || '')
             .setTimestamp()
             .setFooter('Scraccato da https://apod.nasa.gov/');

            if (response.media_type === 'image')
                nasaEmbed.setImage(response.hdurl);

            message.channel.send(nasaEmbed);

            if (response.media_type === 'video')
                message.channel.send(response.url);
        } catch (error) {
            console.error('Error on sending APOD: ', error);
            message.reply('AIA :rocket: :boom:  hai fatto sfallire pure la NASA');
        }
    }
}