/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [
{
  quote:"Deadlines just aren't real to me until I'm staring one in the face.", 
  source:"Rick Riordan", 
  citation:"The Lightning Thief"
},
{
  quote:"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
  source:"Garrison Keillor"
},
{
  quote:"Whenever I feel the need to exercise, I lie down until it goes away", 
  source:"Paul Terry"
},
{
  quote:"Never memorize something that you can look up.",
  source:"Albert Einstein", 
  year:"1956"
},
{
  quote:"If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?", 
  source:"Laurence J. Peter"
}
]; 





function getRandomQuote(){
  var randomNumb = Math.floor(Math.random()*quotes.length)+1;
  return quotes[randomNumb]; // Returns the object chosen from the random number generator */
};

var randomQuoteGenarator = getRandomQuote();


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


var htmlStringContainer = ""; // Container for the HTML-string 
function printQuote(){
  var randomQuoteContainer = getRandomQuote(); // Holds the random quote, chosen from getRandomQuote
  

  htmlStringContainer += "<p class='quote'>" + randomQuoteContainer.quote + "</p>";
  htmlStringContainer += "<p class='source'>" + randomQuoteContainer.source;
  
  if (randomQuoteContainer.citation !== undefined){
    htmlStringContainer += "<span class='citation'>" + randomQuoteContainer.citation + "</span>"; 
  }

  if (randomQuoteContainer.year !== undefined){
    htmlStringContainer += "<span class='citation'>" + randomQuoteContainer.year + "</span>"; 
  }
  

  htmlStringContainer += "</p>" ;

  
};


  printQuote();

  document.getElementById('quote-box').innerHTML = htmlStringContainer;

 



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

