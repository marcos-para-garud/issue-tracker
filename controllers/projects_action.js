const mydata = require('../helper/data');


module.exports.getProjects = function (req, res){

   return res.render('projects', {projects: mydata.projects})

    
}

module.exports.getCreateProject = function(req, res){

    return res.render('projects_create');
}

module.exports.addProject = async function(req, res){

   const {name, description, author} = req.body;

   mydata.addProject(name, description, author);

   return res.redirect('./');
}