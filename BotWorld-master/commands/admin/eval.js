const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message){
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      
    if(message.author.id=='319641861318770689'){
         try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            let cleaned = clean(evaled);
         console.log(cleaned);
         if(args[0]!=undefined && args[0]!=''){
            let embed = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Evaluation')
            .addField(':inbox_tray: Input', '```js\n' + code + '```')
            .addField(':outbox_tray: Output', '```xl\n' + cleaned + '```')
            return message.channel.send(embed);
         }else{
            let embed = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Evaluation')
            .addField(':inbox_tray: Input', '```js\n undefined```')
            .addField(':outbox_tray: Output', '```xl\n' + cleaned + '```')
            return message.channel.send(embed);
         }
      } catch (err) {
        let embed = new Discord.RichEmbed()
        .setColor('#ff5400')
        .setTitle('Error')
        .addField(':inbox_tray: Input', '```js\n' + args.join(" ") + '```')
        .addField(':outbox_tray: Output', '```xl\n' + err.toString() + '```')
        return message.channel.send(embed);
     }
        return;
    }
}

module.exports.help = {
    names: ['evaluate', 'eval'],
    usage: 'l+eval <code>',
    description: 'Evaluates code'
}