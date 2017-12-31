import express from 'express';
import { UserController } from '../../../controllers';

const router = express.Router();

router.post('/', UserController.signup);
export default router;
