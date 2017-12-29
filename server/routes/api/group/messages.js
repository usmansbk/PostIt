import express from 'express';
import { Group } from '../../../controllers/api';

const router = express.Router();

router.get('/', Group.retrieveMessages);

export default router;
