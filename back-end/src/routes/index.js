const router = require('express').Router();

const userRouter = require('./user');
const avatarRouter = require('./avatar');
const loginRouter = require('./login');

router.use('/user', userRouter);
router.use('/avatar', avatarRouter);
router.use('/login', loginRouter);

module.exports = router;
