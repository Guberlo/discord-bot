const axios = require('axios').default;
const url = 'https://aws.random.cat/meow';

module.exports = {
    name: 'cat',
    description: 'Foto random gatti [CRINGE]',
    async execute(message, args) {
        try {
            let response = await axios.get(url);
            let image = response.data.file;

            message.channel.send(image);
        } catch (error) {
            console.error('Error on sending cringe cat: ', error);
            message.reply('AIA :crying_cat_face: foto gatto SFALLITA');
        }
    }
}