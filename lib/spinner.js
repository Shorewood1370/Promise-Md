var spin = require('spinnies')

var spinner = { 
"interval": 500,
"frames": [
"",
"BO",
"BOT ",
"BOT BY PRO",
"BOT BY MI",
"BOT BY SE",
"BOT BY PROMISE",
"BOT BY PROMISE",
"BOT SC BY PROMISE",
"BOT ",
"BO",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}