const fs = require('fs');
const util = require('util');

const folderPath = 'data/anime/';

const dir = fs.readdirSync(folderPath);
const fileCount = dir.length;

module.exports = {
    name: 'anime',
    description: 'aspetta 1 attimo ci sono degli anime da vedere',
    execute(message, args) {
        let image = Math.floor(Math.random() * fileCount) + 1;

        message.channel.send({
            files: [{
                attachment: `data/anime/${image}.jpg`
            }]
        })
    }
}