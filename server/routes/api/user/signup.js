import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  res.send('/api/user/signup works!');
});

export default router;
