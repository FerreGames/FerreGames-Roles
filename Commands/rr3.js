const discord = require("discord.js");

module.exports.initialize = async (client) => {
    const channel = "864825284700536872";
 
    const AnnouncementEmoji = "🔔"
    const noAnnouncementEmoji = "🔕"
 
    const AnnouncementRole = "『🔔』 Announcement";
    const noAnnouncementRole = "『🔕』 No-Announcement";
 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;
 
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == AnnouncementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === AnnouncementRole));
            } else if (reaction.emoji.name == noAnnouncementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === noAnnouncementRole));
            }
        } else {
            return;
        }
    });
 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;
 
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == AnnouncementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === AnnouncementRole));
            } else if (reaction.emoji.name == noAnnouncementEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === noAnnouncementRole));
            }
        } else {
            return;
        }
    });
}

module.exports.sendMessage = async (client, message, args) => {
    const AnnouncementEmoji = "🔔"
    const noAnnouncementEmoji = "🔕"

    const embed = new discord.MessageEmbed()

        .setTitle(`Announcements | Ferre Games`)
        .setDescription(`Here you can choose a role according to how you want to receive announcementsIf you do not want to receive notifications.\n`)
        .addFields(
            { name: ':bell: ⇰', value: 'If you want to receive notifications' },
            { name: ':no_bell: ⇰', value: 'If you do not want to receive notifications' },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")

    var embedMessage = await message.channel.send(embed);
    embedMessage.react(AnnouncementEmoji);
    embedMessage.react(noAnnouncementEmoji);
    
}
 
module.exports.help = {
    name: "rr3"
}