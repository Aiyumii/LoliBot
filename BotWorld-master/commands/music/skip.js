const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
    if(message.guild.voiceConnection){
        message.guild.voiceConnection.dispatcher.end();
    }else{
        message.channel.send('Noo voice connection D:')
    }
}

module.exports.help = {
    names: ['skip'],
    usage: 'l+skip',
    description: 'Skip current song'
}