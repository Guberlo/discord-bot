const { prefix } = require('../config');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Scusami cosa mi chiedi aiuto se tanto sfallirà qualsiasi cosa?\nComunque.. ecco cosa posso fare:\n');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nVuoi sapere cosa fa un comando? Usa \`${prefix}help [nome comando]\``);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Ti ho mandato un messaggio privato per non farti sfigurare qua');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}\n`, error);
                    message.reply('Il tentativo di inviarti un messaggio in privato è... SFALLITO');
                })
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name);

        if (!command)
            return message.reply('Ok sei proprio uno Stefano Origlio... questo comando non esiste');

        data.push(`**Name:** ${command.name}`);

        if(command.description) data.push(`**Description:** ${command.description}`);
        if(command.usage)   data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        message.channel.send(data, { split: true });
	},
};