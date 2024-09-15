
const mydata = require('../helper/data');


module.exports.getCreateIssue = function (req, res) {
    return res.render('issues_create', { projectIndex: req.query.projectId });
}

module.exports.getIssues = function (req, res) {

    let index = req.query.projectId;

    let filters = { ...req.query }

    // console.log('filter:',filters);

    if (typeof Number.parseInt(index) == 'number') {

        index = Number.parseInt(index);

        const filteredIssues = getFilteredIssues(filters, index);

        let issues = mydata.projects[index].issues;

        //Below data is to populate the form
        let projectId = index;

        let labels = mydata.projects[index].labels;

        let authors = [];

        issues.forEach(issue => {
            authors.push(issue.author);
        });

        // console.log({issues, projectId, labels, authors});

        return res.render('issues', { issues: filteredIssues, projectId, labels, authors });
    } else {
        return res.redirect('back');
    }
}

module.exports.addIssue = function (req, res) {

    let { title, description, labels, author, projectId } = req.body

    if (typeof labels == 'string') {
        labels = [labels];
    }

    projectId = Number.parseInt(projectId);

    mydata.projects[projectId].addIssue(title, description, author, labels);


    return res.redirect('/issues?projectId=' + projectId);
}


//Getting all the filtered issues

function getFilteredIssues(filters, index) {
    
    let allIssues = mydata.projects[index].issues;


    //filtering all the authors
    if (filters.authors) {

        if (typeof filters.authors == 'string') {
            filters.authors = [filters.authors]
        }

        allIssues = allIssues.filter(issue => filters.authors.includes(issue.author));
    }


    //filtering for labels
    if (filters.labels) {

        if (typeof filters.labels == 'string') {
            filters.labels = [filters.labels]
        }

        allIssues = allIssues.filter(issue => {
            let isIncluded = false;
            issue.labels.forEach(e => {
                //all the labels as e of particular issue 
                //if e is not present filtere labels then filter out that issue.
                if (filters.labels.includes(e)) {
                    isIncluded = true;
                }
            });

            return isIncluded;
        });
    }

    if (filters.search) {
        let chunk = filters.search.split(' '); //get all the values with spaces

        allIssues = allIssues.filter(issue => {
            let isIncluded = false;
            chunk.forEach(val => {

                let search = new RegExp(val, 'i');

                //filter the search in title and in description
                //if title or description includes chunk then it will filter
                isIncluded = search.test(issue.title) || search.test(issue.description);

            })

            return isIncluded;
        })
    }

    return allIssues;
}