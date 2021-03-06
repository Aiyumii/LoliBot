const Discord = require('discord.js');
const fs = require('fs');
const config = require(`/app/config.json`);

module.exports.run = function(bot, command, args, message, updateJSON, addFooter){
        if(args[0]=='economy'){

            let economyCommands = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Economy help');

            fs.readdir('/app/commands/economy/', function(err, files){
                if(err) console.log(err);
            
                let jsfile = files.filter(f => f.split('.').pop() == 'js');
                if(jsfile.length<=0){
                    console.log('error reading files');
                }
            
                jsfile.forEach(function(f, i){
                    let props = require(`/app/commands/economy/${f}`);
                    economyCommands.addField('l+' + props.help.names[0], props.help.description);
                });
                addFooter(economyCommands, bot, message, command, args);
                return message.channel.send(economyCommands);
            });


        }else if(args[0]=='fun'){

            let funCommands = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Fun help');

            fs.readdir('/app/commands/fun/', function(err, files){
                if(err) console.log(err);
            
                let jsfile = files.filter(f => f.split('.').pop() == 'js');
                if(jsfile.length<=0){
                    console.log('error reading files');
                }
            
                jsfile.forEach(function(f, i){
                    let props = require(`/app/commands/fun/${f}`);
                    funCommands.addField('l+' + props.help.names[0], props.help.description);
                });
                addFooter(funCommands, bot, message, command, args);
                return message.channel.send(funCommands);
            });


        }else if(args[0]=='technical'){

            let technicalCommands = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Technical help');

            fs.readdir('/app/commands/technical/', function(err, files){
                if(err) console.log(err);
            
                let jsfile = files.filter(f => f.split('.').pop() == 'js');
                if(jsfile.length<=0){
                    console.log('error reading files');
                }
            
                jsfile.forEach(function(f, i){
                    let props = require(`/app/commands/technical/${f}`);
                    technicalCommands.addField('l+' + props.help.names[0], props.help.description);
                });
                addFooter(technicalCommands, bot, message, command, args);
                return message.channel.send(technicalCommands);
            });


        }else if(args[0]=='admin'){
            
            let adminCommands = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Admin help');

            fs.readdir('/app/commands/admin/', function(err, files){
                if(err) console.log(err);
            
                let jsfile = files.filter(f => f.split('.').pop() == 'js');
                if(jsfile.length<=0){
                    console.log('error reading files');
                }
            
                jsfile.forEach(function(f, i){
                    let props = require(`/app/commands/admin/${f}`);
                    adminCommands.addField('l+' + props.help.names[0], props.help.description);
                });
                addFooter(adminCommands, bot, message, command, args);
                return message.channel.send(adminCommands);
            });
            
        }else if(args[0]=='music'){

            let musicCommands = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Music help');

            fs.readdir('/app/commands/music/', function(err, files){
                if(err) console.log(err);
            
                let jsfile = files.filter(f => f.split('.').pop() == 'js');
                if(jsfile.length<=0){
                    console.log('error reading files');
                }
            
                jsfile.forEach(function(f, i){
                    let props = require(`/app/commands/music/${f}`);
                    musicCommands.addField('l+' + props.help.names[0], props.help.description);
                });
                addFooter(musicCommands, bot, message, command, args);
                return message.channel.send(musicCommands);
            });
        }else{
            let help = new Discord.RichEmbed()
            .setColor('#ff5400')
            .setTitle('Catagories:')
            .addField('Economy', 'l+help economy')
            .addField('Fun', 'l+help fun')
            .addField('Technical', 'l+help technical')
            .addField('Music', 'l+help music')
            .addField('Admin', 'l+help admin');
            addFooter(help, bot, message, command, args);
            return message.channel.send(help);
        }
}

module.exports.help = {
    names: ['help'],
    usage: 'l+help <section>',
    description: 'Get help'
}