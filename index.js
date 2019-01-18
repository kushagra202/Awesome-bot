

const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: "?"
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('general', 'General');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = [];

bot.login(process.env.BOT_TOKEN);