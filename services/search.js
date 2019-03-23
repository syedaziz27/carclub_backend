const pgp = require('pg-promise')({});
const db = pgp('postgress://localhost/carclub');
const SearchService = {};

SearchService.getCars = (makeId) => {
    const sql = `
    SELECT name 
    FROM model
    WHERE makeid = $[makeId] 
    `
    return db.any(sql, {makeId})
}

module.exports = {SearchService}
