module.exports = {
    name: 'sleeper',
    description: 'cazzp svegliati dai',
    execute(message, args) {
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
}