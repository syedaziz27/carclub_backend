const {db} = require('./dbConnect')
const UpdateService = {};

UpdateService.update = (picture, email) => {
    const sql = `
    UPDATE users
    SET picture = $[picture]
    WHERE email = $[email]
    `;
    return db.none(sql, {picture, email});
}


module.exports = UpdateService;