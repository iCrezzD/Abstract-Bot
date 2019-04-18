const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  
    bot.user.setActivity(` ${client.users.size} users`, { type: 'WATCHING' });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  
  if(cmd === `${prefix}ping`) {
      message.reply(' the ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }


  if(cmd === `${prefix}serverinfo`){

      function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
          if(member.user.bot) botCount++;
        });
        return botCount;
      }

      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++;
        });
        return memberCount;
      }

      let serverembed = new Discord.RichEmbed()
      .setColor("#99AAB5")
      .addField("You Joined", message.member.joinedAt)
      .addField("Humans", checkMembers(message.guild), true)
      .addField("Bots", checkBots(message.guild), true)
      .addField("Total Members", message.guild.memberCount)
      .setFooter("Server created at:")
      .setTimestamp(message.guild.createdAt);

      return message.channel.send(serverembed);
    }
  
  if(cmd === `${prefix}report`){

      //!report @abstract this is the reason

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let rreason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#99AAB5")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);

      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

      return;
    }
  
    if(cmd === `${prefix}!help`){

    let serverembed = new Discord.RichEmbed()
    .setColor("#99AAB5")
    .addField("!ping", "Checks the bot's response time to Discord.", true)
    .addBlankField(true)
    .addField("!serverinfo", "Shows all important info about your server.", true);

    return message.channel.send(serverembed);
  }

});

bot.login(process.env.BOT_TOKEN);

