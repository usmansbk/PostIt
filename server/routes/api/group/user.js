import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  res.send('/api/group/group id/user works!');
});

export default router;
