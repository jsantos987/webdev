//Oracle Password Generator

var numChars = '0123456789'
var lowerChars = 'abcdefghijklmnopqrstuvwxyz'
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function randOrd(a, b){
return (Math.round(Math.random())-0.5);
} 

function getPassword(form) {
var charSet = ''; 
var chars = []; 
var i = 0; 
var fnc = 1; 
var flc = 1; 
var fuc = 1;  
var ffnc = 0; 
var fflc = 1; 
var ffuc = 1; 
var len = 8; 

chars[i++] = numChars.charAt(Math.floor(Math.random()*10)); 
charSet += numChars;

chars[i++] = lowerChars.charAt(Math.floor(Math.random()*26)); 
charSet += lowerChars;

chars[i++] = upperChars.charAt(Math.floor(Math.random()*26)); 
charSet += upperChars;

var y = charSet.length; 

while (i < len-1) {
chars[i++] = charSet.charAt(Math.floor(Math.random()*y));
} 

chars.sort(randOrd); 

charSet = ''; 
if (ffnc) charSet += numChars; 
if (fflc) charSet += lowerChars; 
if (ffuc) charSet += upperChars; 
y = charSet.length; 

chars.unshift(charSet.charAt(Math.floor(Math.random()*y))); 
form.password.value = chars.join('');}