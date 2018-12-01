var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    console.info('Connected');
    console.info('Logged in as: ');
    console.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '&') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ligma':
                bot.sendMessage({
                    to: channelID,
                    message: 'ligma fuggin balls lmao'

                });
            break;
            // Just add any case commands if you want to..
	    case 'noanime':
		bot.sendMessage({
		    to: channelID,
		    message: 'https://i.kym-cdn.com/photos/images/newsfeed/001/408/772/b08.jpg'
        	});
	    case 'nofuckinganime':
		bot.sendMessage({
		    to: channelID,
		    message: 'https://i.redd.it/ogjho1jnh1p01.jpg'
        	});
		break;
//	      case 'end':
//		 bot.disconnect()
//		break;
		
         }
     }
});