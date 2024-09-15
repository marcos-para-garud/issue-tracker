const data = require('../helper/data');

module.exports.getLabelsByProject = function(req, res){

    let projectId = req.query.projectId;

    const labelsSet = data.projects[projectId].labels;

    let labels = [];

    labelsSet.forEach(element => {
        labels.push(element)
    });

    res.json({
        labels: labels
    })
}