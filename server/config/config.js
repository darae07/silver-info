const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_DEVELOPMENT_PASSWORD,
    database: "dev",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+09:00',
  },
  test: {
    username: "root",
    password: null,
    database: "test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "prod",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
