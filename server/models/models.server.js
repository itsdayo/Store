var connectionString = 'mongodb://127.0.0.1:27017/store'; // for local

if(process.env.MLAB_USERNAME_STORE) { // check if running remotely
  var username = process.env.MLAB_USERNAME_STORE; // get from environment
  var password = process.env.MLAB_PASSWORD_STORE;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds121332.mlab.com:21332/heroku_nhg7v7rs'; // use yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString);
module.exports = db;