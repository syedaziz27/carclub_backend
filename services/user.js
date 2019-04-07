const {db} = require('./dbConnect')
const UserService = {};

UserService.createUser = (username, email, city, state, zip) => {
    const sql = `
  INSERT INTO users (username, email, city, state, zip) 
  VALUES ($[username], $[email], $[city], $[state], $[zip]) 
  RETURNING id;
  `;
  return db.one(sql, {username, email, city, state, zip});
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

UserService.updateUID = (username, uid) => {
    const sql = `
    UPDATE users
    SET uid = $[uid]
    WHERE username = $[username]
    `;
    return db.none(sql, {username, uid})
}
 
UserService.getFavs= (email) => {
    const sql = `
    SELECT *
    FROM favorites
    WHERE useremail = $[email]
    `;
    return db.any(sql, {email})
}

module.exports = UserService;