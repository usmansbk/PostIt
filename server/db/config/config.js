module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME || 'usman',
    password: process.env.DEV_DB_PASSWORD || null,
    database: process.env.DEV_DB_NAME || 'postit_dev',
    host: process.env.DEV_DB_HOSTNAME || '127.0.0.1',
    port: process.env.DEV_DB_PORT || '5432',
    dialect: process.env.DIALECT || 'postgres',
    logging: false
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOSTNAME,
    port: process.env.TEST_DB_PORT,
    dialect: process.env.DIALECT
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  }
};
