const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDU2ODgxMjgzNDgyNzc5Njcw.Dh0L1g.6cTzyecg3K-jZ0M1PtgESqEgL8M'

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`SOON COMMUNITY` );
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '✒-userchat');
  if (!channel) return;
  channel.send(`:hugging: **:white_check_mark: Welcome to Server! :tada:**, ${member}`);
});

client.login('NDU2ODgxMjgzNDgyNzc5Njcw.Dh0L1g.6cTzyecg3K-jZ0M1PtgESqEgL8M');

client.on('guildMemberAdd', member => {
    member.guild.channels.get('463695924158398464').setName(`» Member Count: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('463695924158398464').setName(`» Member Count: ${member.guild.memberCount}`);
});

client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name","» Safe");
    member.addRole(role).catch(console.error);
});
