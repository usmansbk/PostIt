import express from 'express';
import { UserController } from '../../../controllers/api';

const router = express.Router();

router.post('/', UserController.signin);

export default router;
