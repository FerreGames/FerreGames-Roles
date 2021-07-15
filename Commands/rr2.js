const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = "864825284700536872";

    const europeEmoji = "🔴"
    const asiaEmoji = "🟠"
    const africaEmoji = "🟡"
    const aaustraliaEmoji = "🟢"
    const northAmericaEmoji = "🔵"
    const southAmericaEmoji = "🟣"

    const europeRole = message.guild.roles.cache.get("864442103571939338");
    const asiaRole = message.guild.roles.cache.get("864443615378669599");
    const africaRole = message.guild.roles.cache.get("864444140893110292");
    const aaustraliaRole = message.guild.roles.cache.get("864444202602725397");
    const northAmericaRole = message.guild.roles.cache.get("864444291212115978");
    const southAmericaRole = message.guild.roles.cache.get("864444380630876180");

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
    embedMessage.react(aaustraliaEmoji);
    embedMessage.react(northAmericaEmoji);
    embedMessage.react(southAmericaEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == europeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(europeRole);
            } else if (reaction.emoji.name == asiaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(asiaRole);
            } else if (reaction.emoji.name == africaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(africaRole);
            } else if (reaction.emoji.name == aaustraliaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(aaustraliaRole);
            } else if (reaction.emoji.name == northAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(northAmericaRole);
            } else if (reaction.emoji.name == southAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(southAmericaRole);
            }
        } else {
            return;
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == europeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(europeRole);
            } else if (reaction.emoji.name == asiaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(asiaRole);
            } else if (reaction.emoji.name == africaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(africaRole);
            } else if (reaction.emoji.name == aaustraliaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(aaustraliaRole);
            } else if (reaction.emoji.name == northAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(northAmericaRole);
            } else if (reaction.emoji.name == southAmericaEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(southAmericaRole);
            }
        } else {
            return;
        }
    });
}

module.exports.help = {
    name: "rr2"
}