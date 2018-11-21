const Discord = require('discord.js');

const client = new Discord.Client();


 client.on('ready', () => {
    console.log('I am ready!');
});

if(cmd === `${prefix}serverinfo`){

        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#009dff")
        .addField("Server Name", message.guild.name)
        .addField("Total Members", message.guild.memberCount);
    
        return message.channel.send(serverembed);
    }

});

client.login(process.env.BOT_TOKEN);
