const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const prefix = "!";
 
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
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

bot.login(process.env.BOT_TOKEN);
