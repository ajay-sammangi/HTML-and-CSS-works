
document.addEventListener("DOMContentLoaded", function(event) { 
    let fetchRes = fetch(
        "https://countriesnow.space/api/v0.1/countries/capital");
    fetchRes.then(res => {
        return res.json()
    }).then(country => {    
        getcountrylist(country);
    })
  });


function getcountrylist(country){
var output = "";
var select = document.getElementById("list");       
for (let i = 0; i < country.data.length; i++) {
    value=country.data[i].name;
    var opt = value;
    var el = document.createElement("option");
    el.textContent = opt;
    // el.value = opt;
    select.appendChild(el);
    }
}
function get_cities(){
   var countryName=document.getElementById("list").value;
    console.log(countryName);
    let options = {
        method: 'GET',
        country:countryName,
    }
    let fetchRes = fetch(
        "https://countriesnow.space/api/v0.1/countries", options);
        fetchRes.then(states =>
        states.json()).then(states=> {
            var x =states.data;
            for(let i=0; i<x.length;i++){
                if(countryName === x[i].country){
                    var citi = x[i].cities;    
                }
            }
            var select1=document.getElementById("states-list");
            select1.innerHTML=" ";
            // select1.innerHTML="Choose a state";
            var add=document.createElement("option");
            add.textContent="choose a state";
            select1.appendChild(add);
            
            for (let i = 0; i <citi.length; i++) {
                value=citi[i];
                var opt = value;
                var el = document.createElement("option");
                el.textContent = opt;
                // el.value = opt;
                select1.appendChild(el);
            }
        })
}