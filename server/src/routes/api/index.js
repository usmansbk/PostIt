import express from 'express';
import { Route, Validate } from '../../middlewares';
import { GroupController, UserController } from '../../controllers';

const router = express.Router();

router.use('/api/group/', Route.isAuthenticated);

router.post('/api/user/signup', UserController.signUp);
router.post('/api/user/signin', UserController.signIn);
router.get('/api/user/groups', Route.isAuthenticated, UserController.retrieveGroups);
router.get('/api/user/posts', Route.isAuthenticated, UserController.retrievePosts);
router.delete('/api/user/post/:pid', Route.isAuthenticated, UserController.deletePost);

router.post('/api/group/', Validate.createGroup, GroupController.createGroup);
router.post('/api/group/:guid/message', Validate.postMessage, GroupController.postMessage);
router.post('/api/group/:guid/user', Validate.addUsers, GroupController.addUsers);
router.get('/api/group/:guid/messages', GroupController.retrieveMessages);
router.delete('/api/group/:guid', GroupController.deleteGroup);
router.delete('/api/group', GroupController.removeUser);

router.all('*', (req, res) => {
  res.status(405).json({
    status: 'fail',
    data: {
      message: 'Bad url'
    }
  });
});

export default router;
