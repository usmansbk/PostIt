import express from 'express';
import { GroupController } from '../../../controllers/api';
import { Validate, Route } from '../../../middlewares';

const router = express.Router();

router.use(Route.auth);

router.post('/:guid/user', Validate.addUsers, GroupController.addUsers);
router.post('/:guid/message', Validate.postMessage, GroupController.postMessage);
router.get('/:guid/messages', Validate.retrieveMessages, GroupController.retrieveMessages);
router.post('/', Validate.createGroup, GroupController.createGroup);

export default router;
