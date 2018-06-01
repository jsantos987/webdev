
//getElementsById, class, TagName 
var id1 = document.getElementById("highlight"); // returns single element with matching ID.
var class0 = document.getElementsByClassName("bolded"); // returns list all elements that match.
var tag1 = document.getElementsByTagName("li");  // returns list all elements that match.



//querySelector - RETURNS ONLY THE FIRST ELEMENT THAT MATCHES QUERY SELECTOR.
var class1 = document.querySelector(".bolded");
var tag2 = document.querySelector("h1");
var li1 = document.querySelector("#highlight");



//querySelectorAll - Returns list of ALL elements that match query selector.
var lis = document.querySelectorAll("li");
var class2= document.querySelectorAll(".bolded");


// 4 ways to select the first <p> tag
var first = document.getElementById("first");
var p2 = document.querySelector("#first"); 
var special = document.getElementsByClassName("special")[1];
var special2 = document.querySelector("p, a.special");
var specialAll = document.querySelectorAll(".special")[1];
var tag3 = document.getElementsByTagName("p")[0];


