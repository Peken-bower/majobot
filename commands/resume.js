const Discord = require("discord.js");
const config = require("../config");
const prefix = config.prefix;

/* Music module by Dhvit (@dhvitOP). Thanks ❤️ */

module.exports = {
 name: "resume",
 aliases: ["r"],
 description: "Resume the music",
 category: "Music",
 usage: "resume",
 run: async (client, message, args) => {
  try {
   const channel = message.member.voice.channel;
   if (!channel) {
    return message.channel.send({embed: {
     color: 16734039,
     description: "You should join a voice channel before using this command!",
    }})
   }
   let queue = message.client.queue.get(message.guild.id)
   if(!queue) {
    return message.channel.send({embed: {
     color: 16734039,
     description: "There is nothing playing right now to resume!",
    }})
   }
   if(queue.playing !== false)
   queue.connection.dispatcher.resume()
   message.react('▶')
   message.channel.send({embed: {
    color: 4779354,
    description: "Resumed the music",
   }})
  } catch (err) {
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}
