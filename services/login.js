const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  // const page=1;
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, username, password 
    FROM login LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(req,res){
  const result = await db.query(
    `INSERT INTO login 
    (username, password) 
    VALUES 
    (${login.username}, ${login.password})`
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}





module.exports = {
  getMultiple,
  create
}
