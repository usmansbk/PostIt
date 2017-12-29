import express from 'express';
import { GroupController } from '../../../controllers/api';

const router = express.Router();

router.post('/', GroupController.postMessage);

export default router;
