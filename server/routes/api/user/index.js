import express from 'express';
import signin from './signin.js';
import signup from './signup.js';

const router = express.Router();

router.use('/signup', signup);
router.use('/signin', signin);

export default router;
