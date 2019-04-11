const {db} = require('./dbConnect')
const CarService = {};

CarService.addFrontPhoto = (email, picture, make, model, color, year, price, mileage) => {
    const sql = `
    INSERT INTO cars (owneremail, frontimg, make, model, color, year, price, mileage, purchased) 
    VALUES ($[email], $[picture], $[make], $[model], $[color], $[year], $[price], $[mileage], false)
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

CarService.addToFavs = (carid, make, model, color, year, price, userEmail, mileage, frontimg) => {
    const sql = `
    INSERT INTO favorites (carid, make, model, color, year, price, useremail, mileage, frontimg)
    VALUES ($[carid], $[make], $[model], $[color], $[year], $[price], $[userEmail], $[mileage], $[frontimg])
    RETURNING id;
    `;
    return db.one(sql, {carid, make, model, color, year, price, userEmail, mileage, frontimg})
}

CarService.updateOwner = (email, carid) => {
    const sql = `
    UPDATE cars
    SET owneremail = $[email], purchased = true
    WHERE id = $[carid]
    RETURNING owneremail;
    `
    return db.one(sql, {email, carid});
}

CarService.postTransaction = (sellerEmail, buyerEmail, make, model, color, year, mileage,price,frontimg, carid) => {
    const sql = `
    INSERT INTO transactions (sellerEmail, buyerEmail, make, model, color, year, mileage, price, frontimg, carid)
    VALUES ($[sellerEmail], $[buyerEmail], $[make], $[model], $[color], $[year], $[mileage], $[price], $[frontimg], $[carid])
    RETURNING id;
    `

    return db.one(sql, {sellerEmail, buyerEmail, make, model, color, year, mileage,price,frontimg, carid} )
}

module.exports = CarService;
