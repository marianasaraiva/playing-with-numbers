const router = require('express').Router();

const userRouter = require('./user');
const avatarRouter = require('./avatar');

router.use('/user', userRouter);
router.use('/avatar', avatarRouter);

module.exports = router;
