document.addEventListener('DOMContentLoaded', function () {
    initializeAuthorSelect();

    initializeLabelSelect();

    // formSubmit();

    initializeAddFloatButton();
});


function formSubmit() {

    const formElem = document.getElementById('issue-search-form');

    formElem.addEventListener('submit', function(e){

        e.preventDefault();

        let formData = new FormData(formElem);

        console.log(formData.entries.toString());
    })


}

function initializeAuthorSelect() {

    let elem = document.getElementById('author-select');
    
    const options = {};
    let instances = M.FormSelect.init(elem, options);

}

function initializeLabelSelect() {

    let elem = document.getElementById('label-select');
    
    const options = {};
    let instances = M.FormSelect.init(elem, options);
}

function initializeAddFloatButton() {

    const elems = document.querySelectorAll('.tooltipped');
    const instances = M.Tooltip.init(elems, {});

}

