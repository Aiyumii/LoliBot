const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let invite = new Discord.RichEmbed()
        .addField('Support server link', 'https://discord.gg/cpMkxRP')
        .setColor('#ff5400')
        addFooter(invite, bot, message, command, args);
        return message.channel.send(invite);
}

module.exports.help = {
    names: ['support'],
    usage: 'l+support',
    description: 'Join the support server'
}