import express from 'express';
import signin from './signin';
import signup from './signup';

const router = express.Router();

router.use('/signup', signup);
router.use('/signin', signin);

export default router;
