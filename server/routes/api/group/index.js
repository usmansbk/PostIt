import express from 'express';
import { GroupController } from '../../../controllers/api';

const router = express.Router();

router.use('/:guid/user', GroupController.addUsers);
router.use('/:guid/message', GroupController.postMessage);
router.use('/:guid/messages', GroupController.retrieveMessages);
router.post('/', GroupController.createGroup);

export default router;
