const pgp = require('pg-promise')({});
const db = pgp((process.env.DATABASE_URL || 'postgress://localhost/carclub'));
const SearchService = {};

SearchService.getCar = (make, model) => {
    const sql = `
    SELECT * 
    FROM cars
    WHERE make = $[make] AND model = $[model]
    `
    return db.any(sql, {make, model})
}

module.exports = {SearchService}
