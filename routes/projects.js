const router = require('express').Router();
const projects = require('../controllers/projects_action');

router.get('/', projects.getProjects);
router.post('/', projects.addProject);


router.get('/create', projects.getCreateProject);

module.exports = router;