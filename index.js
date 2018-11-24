const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {
  console.log('I am ready!');

});

client.on('message', message => {


  if (message.content === '!ping') {
     message.reply('pong');

  }


  if(message.content === '!serverinfo'){

    let serverembed = new Discord.RichEmbed()
    .setColor("#99AAB5")
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .setFooter("Server created at:")
    .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);
  }

});


client.login(process.env.BOT_TOKEN);

