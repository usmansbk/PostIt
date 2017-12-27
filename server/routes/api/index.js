import express from 'express';
import user from './user';
import group from './group';

const router = express.Router();

router.use('/user', user);
router.use('/group', group);

export default router;
