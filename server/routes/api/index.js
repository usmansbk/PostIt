import express from 'express';
import user from './user';
import group from './group';

const router = express.Router();

router.use('/user', user);
router.use('/group', group);
router.all('*', (req, res) => {
  res.status(405).json({
    status: 'fail',
    message: 'Method not supported',
    data: null
  });
});

export default router;
