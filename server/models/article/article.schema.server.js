var mongoose = require('mongoose')

var ArticleSchema = mongoose.Schema({
articleId: {type: mongoose.Schema.Types.ObjectId, ref: 'ArticleModel'},
articleName: String,
developerId: String,
articleURL: String,
dateCreated: {type: Date, default: Date.now}
}, {collection: 'article'})

module.exports = ArticleSchema;