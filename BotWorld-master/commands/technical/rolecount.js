const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let roleEmbed = new Discord.RichEmbed()
        .setColor('#ff5400')

        message.guild.roles.forEach(function(role){
            roleEmbed.addField(role.name, role.members.size);
        });
        addFooter(roleEmbed, bot, message, command, args);
        message.channel.send(roleEmbed);
}

module.exports.help = {
    names: ['rolecount', 'rc'],
    usage: 'l+rolecount',
    description: 'Get roles in guild and number of users with the role'
}