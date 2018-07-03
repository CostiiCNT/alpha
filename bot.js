const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDYzNzMzNTgyOTU1OTM3Nzky.Dh0tOg.hJYuJjeWQZbs8LbiaKRTYiMfMXY'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name","» Safe");
    member.addRole(role).catch(console.error);
});

client.login('NDYzNzMzNTgyOTU1OTM3Nzky.Dh0tOg.hJYuJjeWQZbs8LbiaKRTYiMfMXY');

client.on('guildMemberAdd', member => {
    member.guild.channels.get('463695924158398464').setName(`» Member Count: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('463695924158398464').setName(`» Member Count: ${member.guild.memberCount}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '✒-userchat');
  if (!channel) return;
  channel.send(`:hugging: **[+] ${member}`);
});
