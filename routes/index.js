const router = require('express').Router();

router.use('/', require('./projects'));
router.use('/issues', require('./issues'));
router.use('/labels', require('./labels'));

module.exports = router;