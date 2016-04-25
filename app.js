var accounts = require("./config").accounts
var v2ex = require('./v2ex');

accounts.forEach(function(account) {
    v2ex(account);
});
