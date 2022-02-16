const TOKEN = '5275454741:AAFbFfb2CA1AFge5GaEnQAnKe9U5W3CAyqU';
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const options = {
  polling: true
};
const bot = new TelegramBot(TOKEN, options);
bot.onText(/\/love/, function onLoveText(msg) {
  const { id } = msg.chat;
  var poll = ["1","2","3"];
  bot.sendPoll(id,"Cual es tu edad?",poll);
});

