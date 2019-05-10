const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#99AAB5")
  .addField("!help", "Shows info about commands.")
  .addField("!ping", "Checks the bot's response time to Discord.")
  .addField("!serverinfo", "Shows info about the server")
  .addField("!report (user) (reason)", "Reports user to reports channel.");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}
