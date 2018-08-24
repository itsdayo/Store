var mongoose = require('mongoose')

var PostSchema = mongoose.Schema({
itemId: {type: mongoose.Schema.Types.ObjectId, ref: 'PostModel'},
	title: String,
	description: String,
	url: String,
    price: Number,
    shipping: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'posts'})

module.exports = PostSchema;