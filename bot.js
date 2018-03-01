console.log('start =)')
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
	
	message.author.send('**Hooray!** :tada:')
	message.author.send('You have successfully been given the '+Role.name+' role, new chats should be visible in the "Games" section of the discord. If there are any problems be sure to message an admin or a moderator.')
}

function RemoveRole(Role,message){
	message.member.addRole(Role)
	
	message.author.send('**Hooray!** :tada:')
	message.author.send('You have successfully been given the '+Role.name+' role, new chats should be visible in the "Games" section of the discord. If there are any problems be sure to message an admin or a moderator.')
}

client.on('message', (message) => {
	if (message.author.bot) return;
    var args = message.content.split(/[ ]+/)
    if(isCommand('Join', message)){
    	var Channel = args[1];
    	if (Channel){
    		if (message.channel.id==='416623657578790932'){
    			if (Channel==='arma'){
	    			var Role=message.guild.roles.find('name','Arma')
	    			GiveRole(Role,message)
	    		}else if (Channel==='csgo'){
	    			var Role=message.guild.roles.find('name','CS;GO')
	    			GiveRole(Role,message)
	    		}else if (Channel==='rs6'){
	    			var Role=message.guild.roles.find('name','Rainbow Six Seige')
	    			GiveRole(Role,message)
	    		}else if (Channel==='pubg'){
	    			var Role=message.guild.roles.find('name','PUBG')
	    			GiveRole(Role,message)
	    		}
	    		
    		}
    		
    	} else {
    		message.author.send("Please enter a channel name")
    	}
    	return;
    }else if (isCommand('Leave', message)){
    	message.author.send("leave")
    }else if (isCommand('Help', message)){
    	message.author.send("help")
    }
    message.delete()
});

client.login(BOT_TOKEN);