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

module.exports.help = {
    name: "rr1"
}