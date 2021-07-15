const discord = require("discord.js");

module.exports.initialize = async (client) => {
    const channel = "864825284700536872";
 
    const europeEmoji = "🔴"
    const asiaEmoji = "🟠"
    const africaEmoji = "🟡"
    const australiaEmoji = "🟢"
    const northAmericaEmoji = "🔵"
    const southAmericaEmoji = "🟣"
 
    const europeRole = "『🌍』 Europe";
    const asiaRole = "『🌍』 Asia";
    const africaRole = "『🌍』 Africa";
    const australiaRole = "『🌍』 Australia";
    const northAmericaRole = "『🌍』 North America";
    const southAmericaRole = "『🌍』 South America";
 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;
 
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == europeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === europeRole));
            } else if (reaction.emoji.name == asiaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === asiaRole));
            } else if (reaction.emoji.name == africaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === africaRole));
            } else if (reaction.emoji.name == australiaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === australiaRole));
            } else if (reaction.emoji.name == northAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === northAmericaRole));
            } else if (reaction.emoji.name == southAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === southAmericaRole));
            }
        } else {
            return;
        }
    });
 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;
 
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == europeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === europeRole));
            } else if (reaction.emoji.name == asiaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === asiaRole));
            } else if (reaction.emoji.name == africaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === africaRole));
            } else if (reaction.emoji.name == australiaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === australiaRole));
            } else if (reaction.emoji.name == northAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === northAmericaRole));
            } else if (reaction.emoji.name == southAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === southAmericaRole));
            }
        } else {
            return;
        }
    });
 }

module.exports.sendMessage = async (client, message, args) => {
    const europeEmoji = "🔴"
    const asiaEmoji = "🟠"
    const africaEmoji = "🟡"
    const australiaEmoji = "🟢"
    const northAmericaEmoji = "🔵"
    const southAmericaEmoji = "🟣"

    const embed = new discord.MessageEmbed()

        .setTitle(`Ages | Ferre Games`)
        .setDescription(`Here you can choose a role to which your age belongs.\n`)
        .addFields(
            { name: ':red_circle: ⇰', value: 'You live in a country that is in Europe' },
            { name: ':orange_circle: ⇰', value: 'You live in a country that is in Asia' },
            { name: ':yellow_circle: ⇰', value: 'You live in a country that is in Africa' },
            { name: ':green_circle: ⇰', value: 'You live in a country that is in Australia' },
            { name: ':blue_circle: ⇰', value: 'You live in a country that is in North America' },
            { name: ':purple_circle: ⇰', value: 'You live in a country that is in South America' },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")

    var embedMessage = await message.channel.send(embed);
    embedMessage.react(europeEmoji);
    embedMessage.react(asiaEmoji);
    embedMessage.react(africaEmoji);
    embedMessage.react(australiaEmoji);
    embedMessage.react(northAmericaEmoji);
    embedMessage.react(southAmericaEmoji);
    
}
 
module.exports.help = {
    name: "rr2"
}