/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/





/*** 
 * `quotes` array holding objects containing quotes and associated info
***/
var quotes = [
  {quote: 'Try not to become a man of succes,  but rather try to become a man of value.', source: 'Albert Einstein', tags: ['#intellectual'] },
  {quote: 'Don\'t take life too seriously, no one makes it out alive.' , source: 'Elbert Hubbard', tags: ['#humor'] },
  {quote: 'Always do right.  This will gratify some people and astonish the rest.' , source: 'Mark Twain', tags: ['#altruism'] },
  {quote: 'We have nothing to fear but fear itself.' , source: 'FDR', citiation: 'First Inaugural Address', year: '1933', tags: ['#inspirational'] },
  {quote: 'All that we are is the result of what we have thought.' , source: 'Buddha', tags: ['#philosophy'] }
];
console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
// variable to store a random number bewtween 0 and size of `quotes` array
 var randomNumber = Math.floor(Math.random() * quotes.length);
// variable to store a random object from the `quotes` array
 var randomQuote = quotes[randomNumber];
 return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
// variable to store random quote object
 var randomQuote = getRandomQuote();
// variable to store html to be printed to the page
 var  html = '';
 html += '<p class="quote">' + randomQuote.quote + '</p>' +
'<p class="source">' + randomQuote.source;
// check to see if quote object has a `citation` property, and if so add it to the html string
   if (randomQuote.citiation){
    html += '<span class="citation">' + randomQuote.citiation + '</span>';
   }
// check to see if quote object has a `year` property, and if so add it to the html string
   if (randomQuote.year){
    html += '<span class="year">' + randomQuote.year + '</span>';
   }
// check to see if quote object has a `tags` property, and if so add it to the html string
   if (randomQuote.tags){
    html += '<p>tags: ' + randomQuote.tags.join([separator = ', ']) + '</p>'
   }
  
  html += '</p>';
// replace the html inside the div with id="quote-box" with new html string
  document.getElementById("quote-box").innerHTML = html;
// use `random_bg_color` function to change the background color of the page
  random_bg_color();
}

/***
 *  `random_bg_color` function from "https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php"
***/
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}

// using `setInterval` method to call `printQuote` function every 20 seconds
setInterval(printQuote, 20000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);