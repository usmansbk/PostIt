import app from '../server';
import { sequelize } from '../../db/models';

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.info(`Server started at port ${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.info('Connection to database has been established successfully.');
      sequelize.sync({ force: true }).then(() => {
        console.info('Synchronized models to database successfully.');
      });
    })
    .catch(err => {
      console.info('Unable to establish database connection.', err);
    });
});
