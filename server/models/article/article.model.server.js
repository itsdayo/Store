var mongoose = require('mongoose');
var ArticleSchema = require('./article.schema.server.js');

var ArticleModel = mongoose.model('ArticleModel', ArticleSchema);

ArticleModel.createArticle = createArticle;
ArticleModel.findAllArticles = findAllArticles;


function createArticle(article) {
	return ArticleModel.create(article);
}
 function findAllArticles() {
 	return ArticleModel.find({});
 }
module.exports = ArticleModel;