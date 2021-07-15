const discord = require("discord.js");

module.exports.run = async (client) => {
    const channel = "864825284700536872";
 
    const ageOneEmoji = "1️⃣"
    const ageTwoEmoji = "2️⃣"
    const ageThreeEmoji = "3️⃣"
    const ageFourEmoji = "4️⃣"
    const ageFiveEmoji = "5️⃣"
    const ageSixEmoji = "6️⃣"
 
    const ageOneRole = "『🎊』6 - 15";
    const ageTwoRole = "『🎊』16 - 25";
    const ageThreeRole = "『🎊』26 - 35";
    const ageFourRole = "『🎊』36 - 45";
    const ageFiveRole = "『🎊』46 - 55";
    const ageSixRole = "『🎊』56+";

    const embed = new discord.MessageEmbed()
 
        .setTitle(`Ages | Ferre Games`)
        .setDescription(`Here you can choose a role to which your age belongs.\n`)
        .addFields(
            { name: ':one: ⇰', value: 'Age between 6 & 15' },
            { name: ':two: ⇰', value: 'Age between 16 & 25' },
            { name: ':three: ⇰', value: 'Age between 26 & 35' },
            { name: ':four: ⇰', value: 'Age between 36 & 45' },
            { name: ':five: ⇰', value: 'Age between 46 & 55' },
            { name: ':six: ⇰', value: 'Age above 55' },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")

    var embedMessage = await message.channel.send(embed);
    embedMessage.react(ageOneEmoji);
    embedMessage.react(ageTwoEmoji);
    embedMessage.react(ageThreeEmoji);
    embedMessage.react(ageFourEmoji);
    embedMessage.react(ageFiveEmoji);
    embedMessage.react(ageSixEmoji);
 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;
 
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == ageOneEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === ageOneRole));
            } else if (reaction.emoji.name == ageTwoEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === ageTwoRole));
            } else if (reaction.emoji.name == ageThreeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === ageThreeRole));
            } else if (reaction.emoji.name == ageFourEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === ageFourRole));
            } else if (reaction.emoji.name == ageFiveEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === ageFiveRole));
            } else if (reaction.emoji.name == ageSixEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.find(role => role.name === ageSixRole));
            }
        } else {
            return;
        }
    });
 
    client.on("messageReactionRemove", async (reaction, user) => {
        if (user.bot) return;
 
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == ageOneEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === ageOneRole));
            } else if (reaction.emoji.name == ageTwoEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === ageTwoRole));
            } else if (reaction.emoji.name == ageThreeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === ageThreeRole));
            } else if (reaction.emoji.name == ageFourEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === ageFourRole));
            } else if (reaction.emoji.name == ageFiveEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === ageFiveRole));
            } else if (reaction.emoji.name == ageSixEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(reaction.message.guild.roles.cache.find(role => role.name === ageSixRole));
            }
        } else {
            return;
        }
    });
 }

// module.exports.sendMessage = async (client, message, args) => {
//     const ageOneEmoji = "1️⃣"
//     const ageTwoEmoji = "2️⃣"
//     const ageThreeEmoji = "3️⃣"
//     const ageFourEmoji = "4️⃣"
//     const ageFiveEmoji = "5️⃣"
//     const ageSixEmoji = "6️⃣"

//     const embed = new discord.MessageEmbed()
 
//         .setTitle(`Ages | Ferre Games`)
//         .setDescription(`Here you can choose a role to which your age belongs.\n`)
//         .addFields(
//             { name: ':one: ⇰', value: 'Age between 6 & 15' },
//             { name: ':two: ⇰', value: 'Age between 16 & 25' },
//             { name: ':three: ⇰', value: 'Age between 26 & 35' },
//             { name: ':four: ⇰', value: 'Age between 36 & 45' },
//             { name: ':five: ⇰', value: 'Age between 46 & 55' },
//             { name: ':six: ⇰', value: 'Age above 55' },
//         )
//         .setThumbnail(client.user.displayAvatarURL())
//         .setFooter("Ferre Games©", client.user.displayAvatarURL())
//         .setTimestamp()
//         .setColor("#0000ff")
 
//     var embedMessage = await message.channel.send(embed);
//     embedMessage.react(ageOneEmoji);
//     embedMessage.react(ageTwoEmoji);
//     embedMessage.react(ageThreeEmoji);
//     embedMessage.react(ageFourEmoji);
//     embedMessage.react(ageFiveEmoji);
//     embedMessage.react(ageSixEmoji);
    
// }
 
module.exports.help = {
    name: "rr1"
}