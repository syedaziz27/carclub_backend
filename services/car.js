const {db} = require('./dbConnect')
const CarService = {};

CarService.addFrontPhoto = (email, picture, make, model, color) => {
    const sql = `
    INSERT INTO cars (owneremail, frontimg, make, model, color) 
    VALUES ($[email], $[picture], $[make], $[model], $[color])
    RETURNING id;
    `;
    return db.one(sql, {email, picture, make, model, color})
}

CarService.getMyCars = (email) => {
    const sql = `
    SELECT * 
    FROM cars
    WHERE owneremail = $[email] 
    `
    return db.any(sql, {email})
}
module.exports = CarService;