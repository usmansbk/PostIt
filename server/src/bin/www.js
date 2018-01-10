import app from '../server';
import { sequelize } from '../../db/models';

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection to database has been established successfully.');
      sequelize.sync({ force: true }).then(() => {
        console.log('Synchronized models to database successfully.');
      });
    })
    .catch(err => {
      console.log('Unable to establish database connection.', err);
    });
});