const express = require('express');
const router = express.Router();

const login1=require('../services/login');


// const mysql = require('mysql');
// // const express = require('express');
// const session = require('express-session');
// const path = require('path');


/*login get*/

router.get('/', async function(req, res, next) {
  try {
    res.json(await login1.getMultiple(req.query.page));
    // res.json(await login.get(req));
    // res.json("Cone");
  } catch (err) {
    console.error(`Error while getting login `, err.message);
    next(err);
  }
});


module.exports = router;