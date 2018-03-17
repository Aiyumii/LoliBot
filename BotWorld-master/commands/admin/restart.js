const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
    if(message.author.id=='319641861318770689'){
        message.channel.send('Killing processes...').then(process.exit());
    }
}

module.exports.help = {
    names: ['restart'],
    usage: 'l+restart',
    description: 'Restart me'
}