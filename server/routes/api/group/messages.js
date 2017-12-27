import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/api/group/group id/messages works!');
});

export default router;
