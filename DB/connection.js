require('dotenv').config();
const { error } = require('console');
const mongoose = require('mongoose');
const db_url = process.env.DB_URL;

const connect = ()=>{
        mongoose.connect(db_url).then(val =>{
            console.log("database connected");
        }).catch(error =>{
            console.log({ error: error.message })
        })
}
module.exports = connect;