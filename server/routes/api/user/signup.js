import express from 'express';
import { User } from '../../../controllers/api';

const router = express.Router();

router.post('/', User.signup);
export default router;
