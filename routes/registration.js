// var express = require('express');
// var router = express.Router();
// // const db = require('./db');

// const helper = require('../helper');
// const config = require('../config');

// // to display registration form 
// router.get('/registers', function(req, res, next) {
//   res.send('Register Success');
// });

// // to store user input detail on post request
// router.post('/registers', function(req, res, next) {
    
//     inputData ={
//         username: req.body.username,
//         password: req.body.password,
//         email_address: req.body.email_address,
//         gender: req.body.gender,
        
//     }
// // check unique email address
// var sql='SELECT * FROM registration WHERE username =?';
// config.query(sql, [inputData.username] ,function (err, data, fields) {
//  if(err) throw err
//  if(data.length>1){
//      var msg = inputData.username+ "was already exist";
//  }else{
     
//     // save users data into database
//     var sql = 'INSERT INTO registration SET ?';
//    config.query(sql, inputData, function (err, data) {
//       if (err) throw err;
//            });
//            var msg= res.json('Your are successfully registered');
// //   var msg ="Your are successfully registered";
//  }
// //  res.render('registration-form',{alertMsg:msg});
// })
     
// });
// module.exports = router;