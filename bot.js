const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDYzNzMzNTgyOTU1OTM3Nzky.Dh0tOg.hJYuJjeWQZbs8LbiaKRTYiMfMXY'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('NDYzNzMzNTgyOTU1OTM3Nzky.Dh0tOg.hJYuJjeWQZbs8LbiaKRTYiMfMXY');

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '✒-userchat');
  if (!channel) return;
  channel.send(`:hugging: ** [+] ${member} :tada: **`);
});
