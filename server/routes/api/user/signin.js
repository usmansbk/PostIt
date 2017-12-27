import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  res.send('/api/user/signin works!');
});

export default router;
