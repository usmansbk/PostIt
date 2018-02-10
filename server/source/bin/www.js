import server, { log } from '../server';
import bunyan from 'bunyan';
import { sequelize } from '../../db/models';

const port = process.env.PORT || 8888;

server.listen(port, () => {
  log.info(`Server started at port ${port}`);
  sequelize
    .authenticate()
    .then(() => {
      log.info('Connection to database has been established successfully.');
      sequelize.sync().then(() => {
        log.info('Synchronized models to database successfully.');
      });
    })
    .catch(err => log.info('Unable to establish database connection.', err));
});
