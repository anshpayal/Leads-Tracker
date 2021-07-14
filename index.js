let myLeads = [];    //empty array in which we are going to push the leads 

const inputEL = document.getElementById("text-el");       //getting the access of text box in HTML and storing it to textEL
const inputBtn = document.getElementById("input-btn");    // getting the access of Save input button in HTML and storing it to inputBtn
const deleteBtn=document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");             //getting the access of unorderd list from HTML and storing it to ulEL.
const tabBtn=document.getElementById("tab-btn");


let leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"));   //storing the myleads which are stored in the local storage

if(leadsFromLocalStorage){                 //checking any leads are present in local storage? if yes then it statement are going to run
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}


function render(leads) {            //This function to display the leads in the browser using List tag
    let itemList = ""
    for (let i = 0; i < leads.length; i++) {

        itemList += `<li>
                    <a target= '_blank' href='${leads[i]}}'>
                    ${leads[i]}
                </li>`
    }
    ulEl.innerHTML = itemList;
}


inputBtn.addEventListener("click", function () {      //this is any event listener used for click event
    myLeads.push(inputEL.value);                    //(inputEL.value) is for fetching the data from the text box and push it into myLeads array.
    inputEL.value = ""                                //Empty the text box after the data get pushed into myLeads array.

    localStorage.setItem("myLeads", JSON.stringify(myLeads));       //storing the myleads into local storage.

    render(myLeads);                                                      //function calling
})



tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})



deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

