const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
 name: "invite",
 aliases: [],
 description: "Invite me to your server",
 category: "General",
 usage: "invite",
 run: async (client, message, args) => {
  try {
   const embed = new MessageEmbed() // Prettier
    .setColor("RANDOM")
    .setTitle(`${client.bot_emojis.success} Yay!`)
    .setDescription(`${client.bot_emojis.tada} **[Click this link to invite me!](https://discord.com/oauth2/authorize/?permissions=${client.config.permissions}&scope=${client.config.scopes}&client_id=${client.user.id})** **__[Recomended!]__**\nOr [click this link to invite me *as root*](https://discord.com/oauth2/authorize/?permissions=8&scope=${client.config.scopes}&client_id=${client.user.id}) [Not recomended!]`)
    .setTimestamp()
    .setFooter(
     `~${client.user.username} created by ${client.config.author}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    );
   const row = new MessageActionRow() // Prettier
    .addComponents(
     new MessageButton() // Prettier
      .setURL(`https://discord.com/oauth2/authorize/?permissions=${client.config.permissions}&scope=${client.config.scopes}&client_id=${client.user.id}`)
      .setEmoji(client.bot_emojis.giveaway)
      .setLabel("Invite me!")
      .setStyle("LINK")
    );

   return message.reply({ embeds: [embed], components: [row] });
  } catch (err) {
   console.log(err);
   return client.createCommandError(message, err);
  }
 },
};
