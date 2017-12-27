import express from 'express';
import user from './user';
import message from './message';
import messages from './messages';

const router = express.Router();

router.use('/:guid/user', user);
router.use('/:guid/message', message);
router.use('/:guid/messages', messages);
router.post('/', (req, res) => {
  res.send('/api/group Create broadcase groups');
});

export default router;
