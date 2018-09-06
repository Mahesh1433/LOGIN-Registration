const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

const User = require('../models/users');



//retriving users
router.post('/login', (req, res) => {
    let newLogin = new User({
        email: req.body.email,
        password: req.body.password

    });





User.find({ email: newLogin.email, password: newLogin.password }, function (err, users) {
     //res.json(users);
     console.log({ users });
     if (users == 0) {
         console.log("Email Or Password Not Match");
         res.json("Email Or Password Not Match..");
        
          
         
         
          
     }
     else {
       
         console.log("Login Successfull");
         res.json("Login Successfull..");
         
     }



 });
 
 });
//  function ensureToken(req, res, next) {
//     const bearerHeader = req.headers["authorization"];
//     if (typeof bearerHeader !== 'undefined') {
//       const bearer = bearerHeader.split(" ");
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       next();
//     } else {
//       res.sendStatus(403);
      
//     }
//   }

//retriving users
router.get('/users', (req, res) => {
    User.find(function(err,users){
        if(err){
            res.send(err)
        }
        else{
         
        res.send(users);
    }
    })

});

router.post('/name',(req,res)=>{
    if(err){}
    else{
    User.insert({"Name":"Mahesh Dhotre","Email":"maheshdhotre143@yahoo.com","phone":"7848545658","password":"wedfss"})
    }
})
// function checkAuth(req, res, next) {
//     var header = req.header;
//     var status = verfyToken(header);
//     if (status) {
//         next()
//     } else {
//         res.send(400)({ un })
//     }

// }

//add users
router.post('/user', (req, res, next) => {


    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,

    });



    newUser.save((err, user) => {
        if (err) {
            res.json(err)
        } else {
            res.json(user)
        }

    });


});



//Delete users
router.delete('/user/:id', (req, res, next) => {
    User.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);

        }
        else {
            res.json(result);
        }
    });
});


//update data 


router.put('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        console.log(post);
        res.json(post);
    });
});





//retriving users
/**router.post('/forgot',(req,res,next)=>{
    let newforgot = new User({
        email:req.body.email,
        phone:req.body.phone
    
    });
   
    User.find({email:newforgot.email,phone:newforgot.phone},function(err,users){
        //res.json(users);
        console.log({users});
        if(users==0){
            console.log("Verification Failed");
            res.json("Verification Failed..");
 
        }
        else{
            console.log("Verification Successfull");
            res.json(users);
        }
  
    
        
        }) ;
 
 
       
 
           // console.log(email);
          
 
     
        
       
            
            
            
      
        
       
   
});
 
*/
module.exports = router; 
