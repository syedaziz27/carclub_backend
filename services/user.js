const pgp = require('pg-promise')({});
const db = pgp('postgress://localhost/carclub');
const UserService = {};

UserService.create = (username, email, bio, picture, zip) => {
    const sql = `
  INSERT INTO users (username, email, bio, picture, zip) 
  VALUES ($[username], $[email], $[bio], $[picture], $[zip]) 
  RETURNING id;
  `;
  return db.one(sql, {username, email, bio, picture, zip});
}

UserService.read = (username) => {
    const sql = `
    SELECT *
    FROM users
    WHERE username = $[username] 
    `;
    return db.one(sql, {username});
}
  
UserService.update = (username, email, bio, picture, zip) => {
    const sql = `
    UPDATE users
    SET 
        username = $[username],
        email = $[email],
        bio = $[bio],
        picture = $[picture],
        zip = $[zip]
    WHERE username = $[username]
    `;
    return db.none(sql, {username, email, bio, picture, zip});
}
 
UserService.delete = (username) => {
    const sql = `
    DELETE FROM users
    WHERE username = $[username]
    `;
    return db.none(sql, {username});
}

module.exports = {UserService, db};