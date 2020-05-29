const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  let serverowner = message.guild.member(message.guild.ownerID);
  var roles = [];
  
  var e = message.guild.emojis.map(e => e.toString())
  if (e < 0) {
	  e = "0"
  }
  
  if (e > 10) {
	 e = "More than you know"
  var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL)
    .addField("Server Owner", serverowner.user.username + "#" + serverowner.user.discriminator, true)
    .addField("Members", message.guild.memberCount, true)
    .addField("Server Region", message.guild.region, true)
    .addField("Roles [" + `${message.guild.roles.size}` + "]", message.guild.roles.filter(r => r.id !== message.guild.id).map(roles => roles.name).join(", ") || "No Roles", true)
	.addField("Emojis [" + `${message.guild.emojis.size}` + "]", e, true)
    .setTimestamp()
  
  await message.channel.send(embed=embed);
}

module.exports.help = {
    name: "serverinfo",
    description: "Grabs the server info",
    usage: "serverinfo",
    type: "Utility"
}