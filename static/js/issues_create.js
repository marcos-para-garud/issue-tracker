document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelectorAll('.chips')[0];
    let options = {
        placeholder: "Add labels",
        secondaryPlaceholder: "+labels",
        autocompleteOptions: {
            data: {}, // late udpate with fetch call
            limit: Infinity,
            minLength: 1
        },
        limit: Infinity,
        onChipAdd: chipAddHandler,
        onChipSelect: chipSelectHandler,
        onChipDelete: chipDeleteHandler
    };

    let instance = M.Chips.init(elem, options);

    fetchLabels(instance);


    //Setting up the form data
    const formElem = document.getElementsByTagName('form')[0];


    formElem.addEventListener('submit', function (ev){
        ev.preventDefault();

        console.log(instance.chipsData);

        const labels = instance.chipsData.map(e=>e.tag);

        labels.forEach(label=>{
            const inputElem = document.createElement('input');
            inputElem.name = "labels";
            inputElem.value= label
            inputElem.hidden = true;
            formElem.appendChild(inputElem);
        });
        

        formElem.submit()
    });

});

async function fetchLabels(instance){

    //Parsing from Query paramaeter
    let projectId = location.search.split('=')[1];

    let res = await fetch('/labels?projectId='+projectId);
    let resJson = await res.json();

    //Parsing data in format that autocomplete data is there.
    const data = {}
    
    resJson.labels.forEach(e=>{
        data[`${e}`] = null
    });

    //Updating the autocomplete
    instance.autocomplete.updateData({
        ...data
    });
    
}

function chipAddHandler(){

}

function chipSelectHandler(){
    
}

function chipDeleteHandler(){

}

