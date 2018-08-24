module.exports = function(app){

const postModel = require('../models/postings/postings.model.server.js')
// var bcrypt = require("bcrypt-nodejs");

// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(localStrategy));
// function localStrategy(username, password, done) {
//   userModel.findUserByUsername(username).then(
//     (user) =>{
//                 if(user && bcrypt.compareSync(password, user.password)) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false);
//                 }
//             }
//         )
//    }


// passport.serializeUser(serializeUser);
// passport.deserializeUser(deserializeUser);

postings = [
        {_id: "123", uid:"321", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
      {_id: "234", uid:"543", url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
         {_id: "345",uid:'654', url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
        {_id: "456", uid:'567',url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60}
        ];
shoppingCart = [{_id: "123", uid:"321", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit jeans", shipping:"Free Shipping", price:59.60},
                {_id: "234", uid:"321", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit jeans", shipping:"Free Shipping", price:59.60},
                {_id: "345", uid:"321", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit jeans", shipping:"Free Shipping", price:59.60},
                {_id: "456", uid:"321", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit jeans", shipping:"Free Shipping", price:59.60},
              ]
            watching = [{_id: "123", uid:"321", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
              {_id: "234", uid:"432", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
              {_id: "345", uid:"534", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
              {_id: "456", uid:"645", url: "https://www.goosgle.com/imgres?imgurl=https%3A%2F%2Fdyl80ryjxr1ke.cloudfront.net%2Fp%2Fassets%2Fimages%2Ffront-page-pitcher_09cc057733b498b4199d8a377c721d1c.png&imgrefurl=https%3A%2F%2Fclippingmagic.com%2F&docid=0_HmqFdutkPVdM&tbnid=ALO5AXBEfyq33M%3A&vet=10ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo..i&w=450&h=337&itg=1&bih=974&biw=1920&q=images&ved=0ahUKEwiEpPuKqe_cAhUymeAKHWqpDZcQMwjCASgKMAo&iact=mrc&uact=8", title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:59.60},
            ]

app.get('/api/user/:uid/posting/:pid', findPostingByUserId);
app.get('/api/posting/', findPosting);
app.get('/api/watching/', findWatching);
app.get('/api/shopping/', findShoppingCart);
app.post('/api/post/:uid/', AddShoppingCart);
app.post('/api/watching/', AddWatch);
app.post('/api/post/', findPostbyTitle);
app.post('/api/user/post/', createPost);
app.put('/api/user/:uid/posting', updatePost);
app.delete('/api/user/:uid/posting', deletePost);
// app.post ('/api/register', register);
// app.post  ('/api/login', passport.authenticate('local'), login);
// app.post('/api/logout', logout);
// app.post('/api/loggedIn', loggedin);

//   function loggedin(req, res) {
//     if(req.isAuthenticated()) {
//       res.send(req.user);
//     } else {
//       res.send("0");
//     }
//   } 

// function logout(req, res) {
//    req.logOut();
//    res.send(200);
// }

// function login(req, res) {
//    var user = req.user;
//    res.json(user);
// }

function findPostbyTitle(req, res){
 let name = req.body
console.log("findPostbyTitle")
 for(i=0; i<postings.length; i++){
   if(postings[i].title.includes(name)){
     res.json(postings[i])
     
   }
 }
}

function findShoppingCart(req,res){
  res.send(shoppingCart);
}

function findWatching(req,res){ 
  res.send(watching);
}

function AddShoppingCart(req, res){
 let item = req.body;
shoppingCart.push(item)
console.log('Hello')
 res.send(shoppingCart)
}

function AddWatch(req, res){
  let item = req.body;
 watching.push(item)
  res.send(watching)
 }

function register (req, res) {
    var user = req.body;
     // user.password = bcrypt.hashSync(user.password);
    // userModel.createUser(user).then( user =>{
    //    res.json(user);

    //  })
// function(user){
//  req.login(user, function(err) {
  // });
// });

  users.push(user);
  res.json(users)

}

// function serializeUser(user, done){
//   done(null,user);
// }

// function deserializeUser(user, done){
//     userModel.findUserById(user._id).then(
//         function(user){
//                 done(null, user);
//             },
//             function(err){
//                done(err, null);
//             }
//        );
// }


 function findPostingByUserId(req, res) {
    let uid = req.params['uid']
   // userModel.findUserById(uid).then(
   //  data => {
   //       res.json(data)
   //  })   
let array = [];
for(x=0; x>postings.length; x++){
  if(postings[x].uid = uid){
array.push(posting[x])

    
  }
  res.send(postings[x])
}

  }

   function findPosting(req, res) {
 
   // userModel.findUserById(uid).then(
   //  data => {
   //       res.json(data)
   //  })   

  res.send(postings)


  }
  
  

  function createPost(req,res){
  //   var user = req.body 
  // userModel.createUser(user).then(
  //   (data) =>{
  //       res.json(data);
  //   });


}

function findUser (req, res){
	// const username = req.query['username'];
 //  const password = req.query['password']
	// if (username && password){
	// 	userModel.findUserByCredentials(username, password).then(
 //      data =>{
 //         res.json(data);
 //      })
 //           return;
      
	// 	  }
		
 //  if(username) {
 //       userModel.findUserByUsername(username).then(
 //        data => {
 //          res.json(data);
 //        })  
 //      return;
 //    }
 //    // res.json(users);
 //  res.json(users)
// user = "hello world"
//  res.json(user)

 // return "hello"
}


function updatePost(req, res){
  userId =req.params['uid'];
  var user = req.body;  

   userModel.updateUser(userId, user).then(
    data =>{
       res.json(data);
    })
    
}

function deletePost(req,res){
  var userId = req.params['uid']

  userModel.deleteUser(uid).then(
    data =>{
        res.json(data);
    }
    ) 
  
      
}

}
