const Discord = require("discord.js");

const client = new Discord.Client({disableEveryone: true});
const prefix = "!";
 
client.on("ready", async () => {
    console.log('I am ready!');
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 
     
 
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
