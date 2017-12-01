const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("TestBot, .help");
    console.log("Le bot a bien été connecté");
})

bot.login("Mzc2MzM5NTg3Njk5ODM0ODgx.DQMT0g.YIHj8HWu2lzxzCHYE0NiLQW8vF4");

client.on('message', message => {
    if (message.content === (".test")){
    message.channel.send('Test concluant! Bravo!');
