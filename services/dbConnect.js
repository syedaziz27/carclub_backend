const pgp = require('pg-promise')({});
const db = pgp((process.env.DATABASE_URL || 'postgress://localhost/carclub1'));

module.exports = {
    db,
}