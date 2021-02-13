const fs = require('fs');
const discord = require('discord.js');

const {
    token,
    prefix
} = require('./config');

const client = new discord.Client();
client.commands = new discord.Collection();

// Get commands file in subdirectory
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Require each command script and set it into a map
for (let file of commandFiles) {
    let command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)  return;

    // Gets everything after prefix
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    // Shift args and get args[0] which is the command
    const commandName = args.shift().toLowerCase();
    
    if (!client.commands.has(commandName)){
        message.reply('This command doesn\'t exist.. yet');
        return;
    } 

    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `Questo comando ha bisogno di alcuni argomenti, sei cringe ${message.author}`;
        
        if(command.usage)
            reply += `\nUsa: \`${prefix}${command.name} ${command.usage}\``;

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('AIUTO :exploding_head: qualcosa è rippato');
    }
});

client.login(token);
