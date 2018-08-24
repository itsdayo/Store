var mongoose = require('mongoose');
var PostSchema = require('./postings.schema.server.js');

var PostModel = mongoose.model('PostModel', PostSchema);

PostModel.createPost = createPost;
PostModel.findPostByUserId = findPostByUserId
PostModel.findUserByUsername = findUserByUsername;
PostModel.findUserByCredentials = findUserByCredentials;
PostModel.updatePost = updatePost;
PostModel.deletePost = deletePost;

function createPost(user) {
	return PostModel.create(user);
}

function findPostByUserId(uid) {
	return PostModel.findById(uid);
}

function findUserByUsername(username) {
	return PostModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
	return PostModel.findOne({username: username, password: password});
}

function updatePost(pid, post) {
	return PostModel.update({_id: pid}, post);
}

function deletePost(uid) {
	return PostModel.remove({_id:uid});
}

module.exports = PostModel;