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
 
 
 
});

client.login(process.env.BOT_TOKEN);
