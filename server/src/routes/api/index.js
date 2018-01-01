import express from 'express';
import { Route } from '../../middlewares';
import { GroupController, UserController } from '../../controllers';

const router = express.Router();

router.use('/api/group/', Route.isAuthenticated);

router.post('/api/user/signup', UserController.signUp);
router.post('/api/user/signin', UserController.signIn);
router.post('/api/group/', GroupController.createGroup);
router.post('/api/group/:guid/message', GroupController.postMessage);
router.post('/api/group/:guid/user', GroupController.addUsers);
router.get('/api/group/:guid/messages', GroupController.retrieveMessages);

export default router;
