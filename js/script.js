/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Jing Pang
******************************************/

/* Container - Holds the quote properties */

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
    quote:"Before you judge a man, walk a mile in his shoes. After that who cares?… He’s a mile away and you’ve got his shoes!",
    source:"Billy Connolly",
    tag:"Humor"
  },
  {
    quote:"He who laughs last didn’t get the joke.",
    source:"Charles de Gaulle",
    year:"1956",
    tag:"Humor"
  },
  {
    quote:"If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
    source:"Laurence J. Peter",
    tag:"Logic"

  }
  ];


  /* Adding the tag property */
  document.getElementById("quote-box").className += "tag"


  /* Function - Generates a random number
  // Returns a property value based on the random number output
  */

  function getRandomQuote(){
    var randomNumb = Math.floor(Math.random()*quotes.length);
    return quotes[randomNumb];
  };

  var randomQuoteGenarator = getRandomQuote();

  /* Function - Generates a random bg color
  // To insure the text is readable, and that the contrast between text and bg is big enough -
  the last value in the RGB for y and z is set to below 100.
  */

 function randomBgColor(){
  var x = Math.min(Math.max(parseInt(Math.floor(Math.random() * 256)), 0), 255);
  var y = Math.min(Math.max(parseInt(Math.floor(Math.random() * 256)), 0), 80);
  var z = Math.min(Math.max(parseInt(Math.floor(Math.random() * 256)), 0), 80);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor = bgColor;
};

 /* Function - Prints the quote
  // Holds the random quote, chosen from getRandomQuote
  // Updates the html-string container with the quote and source
  // Checks if citation, year and tag is defined - if they are - update html-string container
  */

  function printQuote(){
    var randomQuoteContainer = getRandomQuote();

    var htmlStringContainer = "";
  
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

    document.getElementById('quote-box').innerHTML = htmlStringContainer;

    return randomBgColor();

  }

  printQuote();

 /* Function: quoteReset()
 // Resets the function, by clearing and reset. 
 // Insuring, that when clicked on the button, you do not have to wait 20 secs before next quote starts
 // Sets the interval to 20 secs. 
 */

var quoteTimer;

function quoteReset(){
clearInterval(quoteTimer);
printQuote();
quoteTimer = setInterval(printQuote, 20000);
 };
quoteReset();

 /***
    When the "Show another quote" button is clicked, the event listener
    below will be triggered, and it will call, or "invoke", the `printQuote`
    function.
  ***/

 document.getElementById('loadQuote').addEventListener("click",quoteReset,false);
