const {db} = require('./dbConnect')
const SignupService = {};

SignupService.create = (username, email, picture, city, state, zip) => {
    const sql = `
  INSERT INTO users (username, email, picture, city, state, zip) 
  VALUES ($[username], $[email], $[picture], $[city], $[state], $[zip]) 
  RETURNING id;
  `;
  return db.one(sql, {username, email, picture, city, state, zip});
}

module.exports = SignupService;