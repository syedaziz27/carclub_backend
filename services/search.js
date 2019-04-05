const {db} = require('./dbConnect')
const SearchService = {};

SearchService.getCar = (make, model) => {
    const sql = `
    SELECT * 
    FROM cars
    WHERE make = $[make] AND model = $[model]
    `
    return db.any(sql, {make, model})
}

module.exports = SearchService;
