module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME || 'uxximan',
    password: process.env.DEV_DB_PASSWORD || null,
    database: process.env.DEV_DB_NAME || 'postit_dev',
    host: process.env.DEV_DB_HOSTNAME || '127.0.0.1',
    port: process.env.DEV_DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOSTNAME,
    port: process.env.TEST_DB_PORT,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};
