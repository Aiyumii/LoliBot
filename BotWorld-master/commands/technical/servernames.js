const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let output = '';
        bot.guilds.forEach(function(guild){
            output += guild.name + ` - ${guild.memberCount} - ${guild.id}\n`;
        })
        return message.author.send(output);
}

module.exports.help = {
    names: ['servernames', 'sn'],
    usage: 's+servernames',
    description: 'Get what servers I am in'
}