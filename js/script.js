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
];

var femaleNames=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaw",
    "Afua",
    "Ama",
];

//calling functions
var month =parseInt(document.getElementById("month").value);
var year=parseInt(document.getElementById("year").value);
var day=parseInt(document.getElementById("day").value);
var name=parseInt(document.getElementById("name").value);
var output=parseInt(document.getElementById("output").value);
var male=parseInt(document.getElementById("male").value);
var female=parseInt(document.getElementById("female").value);

//date validation
if(day<=0||day>=32){
    alert("Oops!please enter a valid day!")
};
var day=new Date(year+"/" +month + "/" +"day");

if( male.checked && year>0 && month<12 && day<32){
    output.style.background="red"
    alert("Cool!" +name+"you were born on a" + daysOfTheWeek(results)+"and your Akan Name is"+maleName)
};
else if(female.checked && year>0 && month<12 && day<12 && day>0 && day<32){
    output.style.background="red"
    alert("Cool"+name +"you were born on a"+daysOfTheWeek(results)+"and your Akan Name is "+femaleName)

};

