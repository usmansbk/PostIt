import express from 'express';
import { GroupController } from '../../../controllers/api';

const router = express.Router();

router.post('/', GroupController.addUser);

export default router;
