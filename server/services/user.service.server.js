module.exports = function(app){

const userModel = require('../models/user/user.model.server.js')
const pictureModel = require('../models/picture/picture.model.server');

var fs = require('fs');

var bcrypt = require("bcrypt-nodejs");


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
function localStrategy(username, password, done) {
  userModel.findUserByUsername(username).then(
    (user) =>{
                if(user && bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            }
        )
   }


// passport.serializeUser(serializeUser);
// passport.deserializeUser(deserializeUser);


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

users = [
        {_id: "123", username: "alice", password: "alice", Name: "Alice Wonder", email: "alice@gmail.com"},
        {_id: "234", username: "bob", password: "bob", Name: "Bob Marley", email: "bob@whatever.com"},
        {_id: "345", username: "charly", password: "charly", Name: "Charly Garcia", email: "charly@hotmail.com"},
        {_id: "456", username: "shiyu", password: "shiyu", Name: "Shiyu Wang", email: "swang@ulem.org"}
        ];


        const multer = require('multer');
        const upload = multer({ dest: './dist/assets/uploads' });

app.get('/api/user/:uid', findUserById);
app.get('/api/user', findUser);
app.post('/api/user', createUser);
app.post("/api/user/:uid/upload", upload.single('image'), uploadImage);
app.put('/api/user/:uid', updateUser);
app.delete('/api/user/:uid', deleteUser);
app.post ('/api/register', register);
app.post  ('/api/login', passport.authenticate('local'), login);
app.post('/api/loggedIn', loggedin);
app.get('/api/user/:uid/picture', downloadPic)
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

  function loggedin(req, res) {
    if(req.isAuthenticated()) {
      res.send(req.user);
    } else {
      res.send("0");
    }
  } 

function login(req, res) {
   var user = req.user;
   res.json(user);
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


 function findUserById(req, res) {
    let uid = req.params['uid']
   userModel.findUserById(uid).then(
    data => {
         res.json(data)
    })   

  }
  

  function createUser(req,res){
    var user = req.body 
  userModel.createUser(user).then(
    (data) =>{
        res.json(data);
    });
}

function findUser (req, res){
  const username = req.query['username'];
  const password = req.query['password']
  if (username && password){
    userModel.findUserByCredentials(username, password).then(
      data =>{
         res.json(data);
      })
           return;

      
      }
    
  if(username) {
       userModel.findUserByUsername(username).then(
        data => {
          res.json(data);
        })  
      return;
    }
    // res.json(users);
  res.json(users)

 // res.json(user)

 // return "hello"
}


function updateUser(req, res){
  userId =req.params['uid'];
  var user = req.body;  

   userModel.updateUser(userId, user).then(
    data =>{
       res.json(data);
    })
    
}

function downloadPic(req, res) {
  var uid = req.params['uid'];
  var callbackUrl = req.headers.referer;
  pictureModel.findPictureForUser(uid).then(
      picture => {
          if(picture) {
              fs.access(picture.name, fs.constants.F_OK, (err) => {
                  if(err) {
                      fs.appendFile(picture.name, picture.data, (err) =>{
                      })                        
                      }})
                  }
              });
          
          res.json(null); 
          res.json(null);
        }




function deleteUser(req,res){
  var userId = req.params['uid']

  userModel.deleteUser(uid).then(
    data =>{
        res.json(data);
    }
    ) 
  
      
}

function uploadImage(req, res) {
  const uid = req.params['uid'];
  const image = req.file;

  const callbackUrl   = req.headers.origin + "/user";
  const picture = {
      name: image.path,
      data: "",
      mimetype: image.mimetype,
      user: uid
  }

  fs.readFile(picture.name, (err, data) => {
      picture.data = data;
      pictureModel.deletePictureForUser(uid).then(
          pictureModel.createPicture(picture).then(
              (picture) => {
                  userModel.findUserById(uid).then(
                      (user) => {
                          user.image = '/assets/uploads/' + image.filename;
                          userModel.updateUser(uid, user).then(
                              (data) => {
                                  res.redirect(callbackUrl);
                              }
                          );
                      }
                  );     
              }
          )
      )
  })    
}


}
