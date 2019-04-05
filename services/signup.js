const {db} = require('./dbConnect')
const SignupService = {};

SignupService.create = (username, email, city, state, zip) => {
    const sql = `
  INSERT INTO users (username, email, city, state, zip) 
  VALUES ($[username], $[email], $[city], $[state], $[zip]) 
  RETURNING id;
  `;
  return db.one(sql, {username, email, city, state, zip});
}

module.exports = SignupService;