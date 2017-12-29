import express from 'express';
import { GroupController } from '../../../controllers/api';

const router = express.Router();

router.get('/', GroupController.retrieveMessages);

export default router;
