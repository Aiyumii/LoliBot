
const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let embed = new Discord.RichEmbed()
        .setColor ('#ff5400')
        .addField('Profile', 'Not Yet')
        addFooter(embed, bot, message, command, args);
        return message.channel.send(embed);
}

module.exports.help = {
    names: ['botprofile', 'bp'],
    usage: 'l+botprofile',
    description: 'Get my DBL profile link'
}