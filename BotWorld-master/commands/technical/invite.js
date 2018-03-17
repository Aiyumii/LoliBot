const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let invite = new Discord.RichEmbed()
        .addField('Link', 'https://discordapp.com/oauth2/authorize?client_id=423763525467373568&permissions=8&scope=bot        ')
        .setColor('#ff5400')
        addFooter(invite, bot, message, command, args);
        return message.channel.send(invite);
}

module.exports.help = {
    names: ['invite'],
    usage: 'l+invite',
    description: 'Invite me to your server'
}