const {db} = require('./dbConnect')
const CarService = {};

CarService.addFrontPhoto = (email, picture, make, model, color, year, price, mileage) => {
    const sql = `
    INSERT INTO cars (owneremail, frontimg, make, model, color, year, price, mileage) 
    VALUES ($[email], $[picture], $[make], $[model], $[color], $[year], $[price], $[mileage])
    RETURNING id;
    `;
    return db.one(sql, {email, picture, make, model, color, year, price, mileage})
}

CarService.getMyCars = (email) => {
    const sql = `
    SELECT * 
    FROM cars
    WHERE owneremail = $[email] 
    `
    return db.any(sql, {email})
}

CarService.getCars = (make, model) => {
    const sql = `
    SELECT *
    FROM cars
    WHERE make = $[make] AND model = $[model]
    `
    return db.any(sql, {make, model})
}

CarService.getVehicleData = (carid) => {
    const sql = `
    SELECT *
    FROM cars
    WHERE id = $[carid]
    `
    return db.one(sql, {carid})
}

CarService.addToFavs = (carid, make, model, color, year, price, useremail, mileage, frontimg) => {
    const sql = `
    INSERT INTO favorites (carid, make, model, color, year, price, useremail, mileage, frontimg)
    VALUES ($[carid], $[make], $[model], $[color], $[year], $[price], $[useremail], $[mileage], $[frontimg])
    RETURNING id;
    `;
    return db.one(sql, {carid, make, model, color, year, price, useremail, mileage, frontimg})
}

module.exports = CarService;
