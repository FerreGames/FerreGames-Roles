const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./Commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.lenght <= 0) {
        console.log("File not found!");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./Commands/${f}`);
        console.log(`File ${f} loaded`);

        client.commands.set(fileGet.help.name, fileGet);

    })

    client.commands.get('rr1').initialize(client);
});

client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Ferre Games", { type: "WATCHING" });

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var commands = messageArray[0];

    var args = messageArray.slice(1);

    var commands = client.commands.get(commands.slice(prefix.length));
    
    if (commands) commands.sendMessage(client, message, args);

});