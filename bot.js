const discord = require('discord.js');
const client = new discord.Client();

var prefix = '!';

client.on("ready", () => {
  client.user.setActivity(` | !Info`);
  console.log(`Bot version 1.22 by Ort =)`);
});

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

function GiveRole(Role,message){
	message.member.addRole(Role)
	message.author.send('**Hooray!** :tada: \nYou have successfully been given the '+Role.name+' role, new chats should be visible in the "Games" section of the discord. If there are any problems be sure to message an admin or a moderator.')
	message.delete()
}

function RemoveRole(Role,message){
	message.member.removeRole(Role)
	message.author.send('**Role Removed** :frowning: \nYou have successfully been removed from the '+Role.name+' role, any chats relevent to this role should no longer be visible. If there are any problems be sure to messange an admin or a moderator.')
	message.delete()
}

client.on('message', (message) => {
	if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
    if(isCommand('join', message)){
    	var Channel = args[1];
    	if (Channel){
    		if (message.channel.id==='416623657578790932'){
    			if (Channel.toLowerCase()==='arma'){
	    			var Role=message.guild.roles.find('name','Arma')
	    			GiveRole(Role,message)
	    		}else if (Channel.toLowerCase()==='csgo'){
	    			var Role=message.guild.roles.find('name','CS;GO')
	    			GiveRole(Role,message)
	    		}else if (Channel.toLowerCase()==='rs6'){
	    			var Role=message.guild.roles.find('name','Rainbow Six Seige')
	    			GiveRole(Role,message)
	    		}else if (Channel.toLowerCase()==='pubg'){
	    			var Role=message.guild.roles.find('name','PUBG')
	    			GiveRole(Role,message)
	    		}else{

	    		}
	    		
    		}
    		
    	} else {
    		message.author.send("Please use role commands in #role-bot and ensure you are using a valid channel name.")
    		message.delete()
    	}
    }else if (isCommand('leave', message)){
    	var Channel = args[1];
    	if (Channel){
    		if (message.channel.id==='416623657578790932'){
    			if (Channel.toLowerCase()==='arma'){
	    			var Role=message.guild.roles.find('name','Arma')
	    			RemoveRole(Role,message)
	    		}else if (Channel.toLowerCase()==='csgo'){
	    			var Role=message.guild.roles.find('name','CS;GO')
	    			RemoveRole(Role,message)
	    		}else if (Channel.toLowerCase()==='rs6'){
	    			var Role=message.guild.roles.find('name','Rainbow Six Seige')
	    			RemoveRole(Role,message)
	    		}else if (Channel.toLowerCase()==='pubg'){
	    			var Role=message.guild.roles.find('name','PUBG')
	    			RemoveRole(Role,message)
	    		}
	    		
    		}
    		
    	} else {
    		message.author.send("Please use role commands in #role-bot and ensure you are using a valid channel name.")
    		message.delete()
    	}
    }else if (isCommand('info', message)){
    	message.author.send("__**Welcome to the Big Deek Club's Discord server!**__\n\nThis bot is used to give roles to individuals to be able to view a variety of game channels which are hidden by the default roles. To be able to view any of these game channels follow the insutrctions in #role-bot which show a list of all game channels in the discord.")
    	message.delete()
    }
});

client.login(BOT_TOKEN);
