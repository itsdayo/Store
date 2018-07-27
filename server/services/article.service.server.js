module.exports = function(app){
   const articleModel = require('../models/article/article.model.server.js')

articles = [
        {_id: "123", developerId:"123", articleName:"Test", articleURL: "https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        {_id: "234", developerId:"123", articleName: "Hello", articleURL:"https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        {_id: "345", developerId:"123", articleName: "Lets Go", articleURL:"https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        {_id: "456", developerId:"123", articleName:"Test", articleURL:"https://stackoverflow.com/questions/37948504/set-href-in-attribute-directive-in-angular"},
        ];

app.post('/api/user/:uid/article',createArticle);
app.get('/api/user/:uid/article',findAllArticles);


function createArticle(req, res) {
  console.log("createArticle");
  var article = req.body;
  // console.log(article)
articleModel.createArticle(article).then(
  data =>{
    res.json(data);
  })
  }

function findPageById(req, res) {
  var uid = req.params['uid']
   for (let x=0; x < articles.length; x++ ){
    if (articles[x]._id = uid){
      res.json(articles[x])}
        return
   }
  
  }

  function findAllArticles(req,res) {
   articleModel.findAllArticles().then(
  data =>{
    res.json(data);
  })

 }
// pageModel.findAllPagesForWebsite(wid).then(
// pages =>{

//   res.json(pages);
// }
//   )
// }

//   function findPageById(req,res) {
//     var pid = req.params['pid']
//    pageModel.findPageById(pid).then(
// data =>{
//     res.json(data)
   
// }
//     )
//       }
 
//  function  updatePage(req, res) {
//  let pid = req.params['pid'];
//  let page = req.body;
//    pageModel.updatePage(pid,page).then(

//     data =>{
//        res.json(data)
//     })
   
// }


//  function deletePage(req, res) {
//   let pid = req.params['pid']
//    pageModel.deletePage(pid).then(
//     data =>{
//       res.json(data);
//     })
      

//     }
}
