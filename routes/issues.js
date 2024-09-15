const router = require('express').Router();
const issuesAction = require('../controllers/issues_action');

router.get('/create', issuesAction.getCreateIssue);

router.post('/create', issuesAction.addIssue)

router.get('/', issuesAction.getIssues);

module.exports = router;