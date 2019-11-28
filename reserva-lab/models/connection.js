//npm install --save pg-promise bluebird
const promise = require('bluebird');
const options = {
    promiseLib: promise
};
const pgp = require('pg-promise')(options);
require('dotenv').config();

//postgres://username:password@host:port/databasename
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const connection = pgp(connectionString);

module.exports = {connection}