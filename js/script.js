//hide the alert button
document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";

//declare arrays

var daysOfTheWeek=[
"Sunday",
"Monday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];

var maleNames=[
"Kwasi",
"Kwadwo",
"Kwabena",
"Kwaku",
"Yaw",
"Kofi",
"Kwame",
];

var femaleNames=[
"Akosua",
"Adwoa",
"Abenaa",
"Akua",
"Yaa",
"Afua",
"Ama",
];

//calling functions

var month = parseInt(document.getElementById("month").value);
var year =parseInt(document.getElementById("year").value);
var day =parseInt(document.getElementById("day").value);
var name =parseInt(document.get.ElementById("name"));
var dateOfBirth =newDate(year +"/"+ month + "/" +day);
var output=parseInt(document.getElementById(output).value);
var male=parseInt(document.getElementById("male"));
var female=parseInt(document.getElementById("female"));

//Validation

if(year<0){
    output.style. background="red"
    output.style. color="black"
    output.innerHTML="Oops!" + name + "Enter a valid year!"
};
else if((month < 1) || (month > 31)) {
    output.style.background ="red"
    output.style.color= "white"
    output.innerHTML = "Hey!"+ name + " Please enter a valid month! "
}

else (day<0)|| day<31){
    output.style. background="red";
    output.style. color="black";
    output.innerHTML="Oops!" + name + "Enter a valid day!"
};
//storing data in variables

