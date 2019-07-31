/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* Quote container */
var quotes = [
{
  quote:"Deadlines just aren't real to me until I'm staring one in the face.", 
  source:"Rick Riordan", 
  citation:"The Lightning Thief",
  tag:"Work"
},
{
  quote:"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
  source:"Garrison Keillor",
  tag:"Religion"
},
{
  quote:"Whenever I feel the need to exercise, I lie down until it goes away", 
  source:"Paul Terry",
  tag:"Laziness"
},
{
  quote:"Never memorize something that you can look up.",
  source:"Albert Einstein", 
  year:"1956",
  tag:"Logic"
},
{
  quote:"If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?", 
  source:"Laurence J. Peter",
  tag:"Logic"

}
]; 

/* Function -  
// Generates a random number 
// Returns a property value based on the random number output 
*/

function getRandomQuote(){
  var randomNumb = Math.floor(Math.random()*quotes.length)+1;
  return quotes[randomNumb]; 
};

var randomQuoteGenarator = getRandomQuote();

/* Adding the tag property */

document.getElementById("quote-box").className += "tag"

/* Container for an empty html string*/

var htmlStringContainer = ""; 

/* Function -  
// Holds the random quote, chosen from getRandomQuote
// Updates the html-string container with the quote and source
// Checks if citation, year and tag is defined - if they are - update html-string container 
*/

var myVar = setInterval(printQuote, 1000);


function printQuote(){
  var randomQuoteContainer = getRandomQuote(); 


  htmlStringContainer += "<p class='quote'>" + randomQuoteContainer.quote + "</p>";
  htmlStringContainer += "<p class='source'>" + randomQuoteContainer.source;
  
  if (randomQuoteContainer.citation !== undefined){
    htmlStringContainer += "<span class='citation'>" + randomQuoteContainer.citation + "</span>"; 
  }

  if (randomQuoteContainer.year !== undefined){
    htmlStringContainer += "<span class='year'>" + randomQuoteContainer.year + "</span>"; 
  }

  if (randomQuoteContainer.tag !== undefined){
    htmlStringContainer += "<span class='tag'>" + ", " + randomQuoteContainer.tag + "</span>"; 
  }
  
  htmlStringContainer += "</p>" ;

}
printQuote();



function myStopFunction() {
  clearInterval(myVar);
}
myStopFunction();

  document.getElementById('quote-box').innerHTML = htmlStringContainer;
 
/* Function -  
// Generates random bg color
// To insure the text is readable, and that the contrast between text and bg is big enough - 
the last value in the RGB for y and z is set to below 100. 
*/

  function randomBgColor(){
    var x = Math.min(Math.max(parseInt(Math.floor(Math.random() * 256)), 0), 255);
    var y = Math.min(Math.max(parseInt(Math.floor(Math.random() * 256)), 0), 80);
    var z = Math.min(Math.max(parseInt(Math.floor(Math.random() * 256)), 0), 80);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.backgroundColor = bgColor;
    
  }
  randomBgColor();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click",printQuote,randomBgColor, false);



