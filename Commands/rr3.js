const discord = require("discord.js");

module.exports.initialize = async (client) => {
    const channel = "864825284700536872";
 
    const announcementEmoji = "🔔"
    const noAnnouncementEmoji = "🔕"
 
    const announcementRole = message.guild.roles.cache.get("865162925178486784");
    const noAnnouncementRole = message.guild.roles.cache.get("865163112504229939");
 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == announcementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(announcementRole);
            } else if (reaction.emoji.name == noAnnouncementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(noAnnouncementRole);
            }
        } else {
            return;
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == announcementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(announcementRole);
            } else if (reaction.emoji.name == noAnnouncementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(noAnnouncementRole);
            }
        } else {
            return;
        }
    });
 }

module.exports.sendMessage = async (client, message, args) => {
    const announcementEmoji = "🔴"
    const noAnnouncementEmoji = "🟠"

    const embed = new discord.MessageEmbed()

        .setTitle(`Ages | Ferre Games`)
        .setDescription(`Here you can choose a role to which your age belongs.\n`)
        .addFields(
            { name: ':red_circle: ⇰', value: '' },
            { name: ':orange_circle: ⇰', value: '' },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")

    var embedMessage = await message.channel.send(embed);
    embedMessage.react(announcementEmoji);
    embedMessage.react(noAnnouncementEmoji);
    
}
 
module.exports.help = {
    name: "rr3"
}