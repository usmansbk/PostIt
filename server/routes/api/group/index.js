import express from 'express';
import user from './user';
import message from './message';
import messages from './messages';
import { Group } from '../../../controllers/api';

const router = express.Router();

router.use('/:guid/user', user);
router.use('/:guid/message', message);
router.use('/:guid/messages', messages);
router.post('/', Group.createGroup);

export default router;
