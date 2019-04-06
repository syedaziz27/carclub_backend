const {db} = require('./dbConnect')
const UserService = {};

UserService.createUser = (username, email, city, state, zip, uid) => {
    const sql = `
  INSERT INTO users (username, email, city, state, zip, uid) 
  VALUES ($[username], $[email], $[city], $[state], $[zip], $[uid]) 
  RETURNING id;
  `;
  return db.one(sql, {username, email, city, state, zip, uid});
}

UserService.getUserData = (email) => {
    const sql = `
    SELECT *
    FROM users
    WHERE email = $[email] 
    `;
    return db.one(sql, {email});
}
  
UserService.updatePhoto = (email, picture) => {
    const sql = `
    UPDATE users
    SET picture = $[picture]
    WHERE email = $[email]
    `;
    return db.none(sql, {email, picture});
}
 
// UserService.delete = (username) => {
//     const sql = `
//     DELETE FROM users
//     WHERE username = $[username]
//     `;
//     return db.none(sql, {username});
// }

module.exports = UserService;