const express = require('express');
const router = express.Router();

const login=require('../services/login');


// const mysql = require('mysql');
// // const express = require('express');
// const session = require('express-session');
// const path = require('path');


/*login get*/

router.get('/', async function(req, res, next) {
  try {
    res.json(await login.getMultiple(req.query.page));
    // res.json(await login.get(req));
    // res.json("Cone");
  } catch (err) {
    console.error(`Error while getting login `, err.message);
    next(err);
  }
});


//login check




// router.post('/register').post((req,res)=>{
//   router.post('/register',async function(req, res, next) {
// const {usernmae, password}=req.body;

// const newUser=new login.create({usernmae,password});
// newUser.save()
// .then(()=> res.json('user addes'))
// .catch(err=>res.status(400).json('error:'+err))
// })
// });




// router.post("/register",(req,res)=>{
//     console.log(req.body);
//   /*
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   const confirm_password = req.body.confirm_password;
//   console.log(name);
//   console.log(email);
//     //res.send("Form Submitted");
//   */
//   const { username, password,  } = req.body;
//   db.query(
//     "select username from login where username=?",
//     [username],
//     async (error, result) => {
//       if (error) {
//         confirm.log(error);
//       }

//       if (result.length > 0) {
//         return res.render("register", {
//           msg: "user name id already Taken",
//           msg_type: "error",
//         });
//       } 
      
//       let hashedPassword = await bcrypt.hash(password, 8);
//       //console.log(hashedPassword);

//       db.query(
//         "insert into login set ?",
//         { username: username,  password: hashedPassword },
//         (error, result) => {
//           if (error) {
//             console.log(error);
//           } else {
//             //console.log(result);
//             return res.render("register", {
//               msg: "login Registration Success",
//               msg_type: "good",
//             });
//           }
//         }
//       );
//     }
//   );
// }

  
// );

// http://localhost:3000/auth
router.post('/auth', function auth(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password],    function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.send('Welcome Your Username & Password is correct');
        // response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


module.exports = router;