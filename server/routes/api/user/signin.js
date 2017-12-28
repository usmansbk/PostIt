import express from 'express';
import { User } from '../../controllers/api';

const router = express.Router();

router.post('/', User.signin);

export default router;
