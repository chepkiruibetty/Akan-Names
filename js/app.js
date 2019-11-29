//declaring arrays
var daysOfWeek=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

var MaleNames=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
];js

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
function getName(){
var year=parseInt(document.getElementById("year").value);
var month =parseInt(document.getElementById("month").value);

var day=parseInt(document.getElementById("day").value);
var male = document.getElementById("male");
var female = document.getElementById("female");

var day = new Date(year + "/" + month + "/" + day);

var birthDay=day.getDay();
if(male.checked==true){
   alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + MaleNames[birthDay])
}
else(female.checked==true);{
 alert("You were born on " +daysOfWeek[birthday]+ "and your akan name is "+femaleNames[birthday]) 
}
}