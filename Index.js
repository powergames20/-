const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "e!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });



client.login('Nzk3NDc1MTc2NTAxMDg0MTkx.X_nAog.fKcBsUYyHuBUhnsqhhSwrEc8kUc');