import express from 'express';
import { GroupController } from '../../../controllers/api';

const router = express.Router();

router.post('/:guid/user', GroupController.addUsers);
router.post('/:guid/message', GroupController.postMessage);
router.get('/:guid/messages', GroupController.retrieveMessages);
router.post('/', GroupController.createGroup);

export default router;
