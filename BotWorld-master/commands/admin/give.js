const Discord = require('discord.js');
const fs = require('fs');
const config = require(`../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        let user;
        if(message.author.id=='319641861318770689'){
            if(bot.users.find("id", args[0].replace('<', '').replace('!', '').replace('@', '').replace('>', ''))){
                user = args[0].replace('<', '').replace('!', '').replace('@', '').replace('>', '');
                for(var i = 0;i<config.users.length;i++){
                    if(config.users[i].id==user){
                        config.users[i].balance = config.users[i].balance + Number(args[1]);
                        let successEmbed = new Discord.RichEmbed()
                        .setColor('#ff5400')
                        .addField('Gave', `${config.users[i].username}`)
                        .addField('Amount', `${args[1]}`)
                        addFooter(successEmbed, bot, message, command, args);
                        return message.channel.send(successEmbed);
                    }
                }
            }
        }
}

module.exports.help = {
    names: ['give'],
    usage: 'l+give <user mention> <amount>',
    description: 'Give a user new money'
}