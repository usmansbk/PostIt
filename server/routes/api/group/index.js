import express from 'express';
import user from './user';
import message from './message';
import messages from './messages';
import { GroupController } from '../../../controllers/api';

const router = express.Router();

router.use('/:guid/user', GroupController.addUser);
router.use('/:guid/message', GroupController.postMessage);
router.use('/:guid/messages', GroupController.retrieveMessages);
router.post('/', GroupController.createGroup);

export default router;
