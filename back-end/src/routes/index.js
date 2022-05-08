const router = require('express').Router();

const userRouter = require('./user');
const avatarRouter = require('./avatar');
const loginRouter = require('./login');
const rankingRouter = require('./ranking');
const gameRouter = require('./game');

router.use('/user', userRouter);
router.use('/avatar', avatarRouter);
router.use('/login', loginRouter);
router.use('/ranking', rankingRouter);
router.use('/game', gameRouter);

module.exports = router;
