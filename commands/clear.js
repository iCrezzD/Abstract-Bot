const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const deleteCount = parseInt(args[0], 10);

  if(!message.member.roles.some(r=>["Administrators", "Moderators", "Trial Mods"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
    
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete.");

  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

module.exports.help = {
  name: "clear"
}
