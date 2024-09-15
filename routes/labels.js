const router = require('express').Router();
const labelAction = require('../controllers/label_action');

router.get('/', labelAction.getLabelsByProject);

module.exports = router;