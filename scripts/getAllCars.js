const pgp = require('pg-promise')({});
const db = pgp('postgress://localhost/carclub1');
const axios = require('axios');
const fs = require('fs')



const getMake = async () => {
    const carObj = {}

    try {
        const data = await axios.get('https://databases.one/api/?format=json&select=make&api_key=5d8462f1cd3abd68189143b35')
        for (let i = 0; i < data.data.result.length; i++){
            const make = data.data.result[i].make
            const makeID = data.data.result[i].make_id
            const 
            // db.any(`INSERT INTO make (name) VALUES ($[make])`, {make})
            const models = await axios.get(`https://databases.one/api/?format=json&select=model&make_id=${makeID}&api_key=5d8462f1cd3abd68189143b35`);
            for ( let j = 0; j < models.data.result.length; j++) {
                const model = models.data.result[j].model;
                // db.any(`INSERT INTO model (makeName, name) VALUES ($[make], $[model])`, {make, model})
            }
        }
    }
    catch (err) {
        console.log(err)
    }

}

getMake()