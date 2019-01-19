'use strict';
let config = require('config');
let zeroFee = config.get('zer').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**:bank: Coins :bank:**__\n' +
         **Zero (ZER) Tipper**\n    Transaction Fees: **' + ravenFee + '**\n' +
        '__**Commands**__\n' +
      '  **' + prefix + 'tip<CoinSymbol>** : Displays This Message\n' +
      '  **' + prefix + 'tip<CoinSymbol> balance** : get your balance\n' +
      '  **' + prefix + 'tip<CoinSymbol> deposit** : get address for your deposits\n' +
      '  **' + prefix + 'tip<CoinSymbol> withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + 'tip<CoinSymbol> <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + 'tip<CoinSymbol> private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'tiprvn @MSFTserver 10**\n' +
      '  **' + prefix + 'tipdoge withdraw DOGEaddressHERE 10**\n' +
      '  **' + prefix + 'tipftc private @MSFTserver 10**\n' +
      '  **' + prefix + 'tiplbc balance**\n' +
      '  **' + prefix + 'tippxc deposit**\n'
    );
  }
};
