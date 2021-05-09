const imagesNumber = 7;
const min = 3;

module.exports = {
    name: 'sleeper',
    description: 'cazzp svegliati dai',
    execute(message, args) {
        if (message.author.tag === 'Bakarmelo#8560') {
            if (Math.floor(Math.random() * 999) == 1)
                message.channel.send({
                    files: [{
                        attachment: 'data/sleeper2.jpg'
                    }]
                });
            else
                message.channel.send({
                    files: [{
                        attachment: 'data/sleeper.jpg'
                    }]
                });
        }
        else {
            // Number between min and max number 
            let img = Math.floor(Math.random() * (imagesNumber - min + 1)) + min;
            message.channel.send({
                files: [{
                    attachment: `data/sleeper${img}.jpg`
                }]
            });
        }

    }
}