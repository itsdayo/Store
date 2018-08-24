var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
	password: String,
	name: String,
	username: String,
	email: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'})

module.exports = UserSchema;