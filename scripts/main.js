import Ajax from "./ajax.js";


let aj = Ajax("http://api.weatherapi.com/v1/current.json?key=f9eb1cf54b9e4b8ba05132048222804&q=London&aqi=yes")
console.log(aj)
aj.then(response => {
    let parsedData = JSON.parse(response)
    displayTemp(parsedData)
}).catch(e => {
    console.log(e);
});



function displayTemp(parsedData){
    let elem = document.createElement("div")
    console.log(parsedData.current)
    elem.innerHTML = "The temperature in London is: " + parsedData.current.temp_c   +"<br>"+
        "The temperature in London feels like: " + parsedData.current.feelslike_c;

    document.body.appendChild(elem)
}