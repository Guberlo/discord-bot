const { spoon_api } = require('../config');
const Discord = require('discord.js');
const axios = require('axios').default;
const url = 'https://api.spoonacular.com/recipes/complexSearch?query='

module.exports = {
    name: 'fame',
    description: 'Cucina qualcosa così ti sfallisce il piatto',
    args: true,
    usage: '[some food you\'d like to eat]',
    async execute(message, args) {
       if (args.length != 1)
            return message.reply('Ma chi sei? Giorgio Locatelli?\nPosso cercare solo una ricetta alla volta, ammazzati :)');
        
        try {
            const response = await axios.get(url + args[0] + '&apiKey=' + spoon_api);
            let data = response.data.results;
            let index = Math.floor(Math.random() * data.length);
            let recipe = data[index];

            let recipe_url = 'https://spoonacular.com/' + recipe.title.replace(/\s+/g, '-') + '-' + recipe.id;

            const foodEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(recipe.title)
                .setURL(recipe_url)
                .setThumbnail(recipe.image)
                .setImage(recipe.image)
                .setTimestamp()
                .setFooter('Scraccato da https://spoonacular.com/');

            message.channel.send(foodEmbed);
        } catch (error) {
            console.error('Error on request for spoon api', error);
            message.reply('OPS :shushing_face: la ricerca è SFALLITA');
        }
    }
}