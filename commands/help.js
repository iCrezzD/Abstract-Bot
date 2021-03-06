const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#99AAB5")
  .addField("!help", "Shows info about commands.")
  .addField("!ping", "Checks the bot's response time to Discord.")
  .addField("!serverinfo", "Shows info about the server.")
  .addField("!report (user) (reason)", "Reports user to reports channel.")
  .addField("!clear (number)", "Clears 2-100 messages from channel.")
  .addField("!kick (user) (reason)", "Kicks a member from the server.")
  .addField("!ban (user) (reason)", "Bans a member from the server.");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}
