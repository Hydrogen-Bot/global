const Discord = require("discord.js")
const client = new Discord.Client()
const hex = require("random-hex")

client.on("message", async(msg) => {
  if(msg.channel.name !== "hydrogen-global-chat")return;
  msg.delete();
  let e = new Discord.RichEmbed()
    .setTitle("Hydrogen Global Chat")
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .setDescription(`Message sent by ${msg.author.tag}`)
    .addField("Message Content", msg.content)
    .setThumbnail(msg.author.displayAvatarURL)
    .setFooter("Hydrogen Global Chat")
    .setTimestamp()
    .setColor(hex.generate());
  await Promise.all(client.channels.filter(c => c.name === 'hydrogen-global-chat').map(c => c.send(e)))
  await Promise.all(client.channels.filter(c => c.name === 'hydrogen-global-chat').map(c => c.setTopic(`Last message was sent by <@${msg.author.id}>`)))
})
