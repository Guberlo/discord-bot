module.exports = {
    name: 'sfallito',
    description: 'controlla se è sfallito',
    execute(message, args) {
        const replies = [":sunglasses: SFALLITO", ":cold_face: SFALLENDO", ":ghost: RIP"];
        let index = Math.floor(Math.random() * replies.length);

        message.channel.send(replies[index]);
    }
}