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
  
// UserService.update = (username, email, bio, picture, zip) => {
//     const sql = `
//     UPDATE users
//     SET 
//         username = $[username],
//         email = $[email],
//         bio = $[bio],
//         picture = $[picture],
//         zip = $[zip]
//     WHERE username = $[username]
//     `;
//     return db.none(sql, {username, email, bio, picture, zip});
// }
 
// UserService.delete = (username) => {
//     const sql = `
//     DELETE FROM users
//     WHERE username = $[username]
//     `;
//     return db.none(sql, {username});
// }

module.exports = UserService;