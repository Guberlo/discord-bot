module.exports = {
    name: 'pog',
    description: 'pogghiamo insieme ;)',
    execute(message, args) {
        message.channel.send({
            files: [{
                attachment: 'data/pog.png'
            }]
        })
    }
}