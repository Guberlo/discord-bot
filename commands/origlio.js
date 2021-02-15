const fs = require('fs');
const axios = require('axios').default;
const Discord = require('discord.js');
const file = require('../data/strain.json');
const keys = Object.keys(file);
const { bing_api } = require('../config');
const url = 'https://api.bing.microsoft.com/v7.0/images/search?count=1&q=';
const request_config = {
    headers: {
        'Ocp-Apim-Subscription-Key': bing_api
    }
};

module.exports = {
    name: 'origlio',
    description: 'Fai svegliare un po\' El_Cagno',
    async execute(message, args) {
        try {
            let strain = keys[Math.floor(Math.random() * keys.length)];
            console.log(strain);
            if(strain) {
                let response = await axios.get(url + strain.replace(' ', '+') + '+strain', request_config);
                let image = response.data.value[0].contentUrl;

                let strainEmbed = new Discord.MessageEmbed()
                .setColor('#355210')
                .setTitle(strain)
                .setURL(url || '')
                .setImage(image)
                .setThumbnail(image)
                .setAuthor(file[strain].race || '')
                .setFooter('Scraccato da http://strains.evanbusse.com/index.html');

                if (file[strain].flavors)
                    strainEmbed.addField('Flavors',file[strain].flavors.join(', ') );

                if (file[strain].effects.positive)
                    strainEmbed.addField('Positive', file[strain].effects.positive.join(', ') );

                if (file[strain].effects.negative)
                    strainEmbed.addField('Negative', file[strain].effects.negative.join(', ') );

                if (file[strain].effects.medical)
                    strainEmbed.addField('Medical', file[strain].effects.medical.join(', ') );

                message.channel.send(strainEmbed);
            }
            else
             message.reply('AIA :police_officer: hai detto BUONASERAA al poliziotto sbagliato.');
        } catch (error) {
            console.error('Error on sending origlio kush: ', error);
            message.reply('AIA :police_officer: hai detto BUONASERAA al poliziotto sbagliato.');
        }
    }
}