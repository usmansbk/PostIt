import express from 'express';
import { Group } from '../../../controllers/api';

const router = express.Router();

router.post('/', Group.postMessage);

export default router;
