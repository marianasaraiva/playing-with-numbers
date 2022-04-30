const router = require('express').Router();

const userRouter = require('./user');
const avatarRouter = require('./avatar');
const loginRouter = require('./login');
const rankingRouter = require('./ranking');

router.use('/user', userRouter);
router.use('/avatar', avatarRouter);
router.use('/login', loginRouter);
router.use('/ranking', rankingRouter);

module.exports = router;
