import express from 'express';
import { Group } from '../../../controllers/api';

const router = express.Router();

router.post('/', Group.addUser);

export default router;
