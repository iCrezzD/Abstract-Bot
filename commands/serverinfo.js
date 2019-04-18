const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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

module.exports.help = {
  name: "serverinfo"
}
