import env from 'dotenv';

env.config();

export default {
  development: {
    username: "usman",
    password: null, 
    database: "postit_dev", 
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres"
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres" 
  }
}
