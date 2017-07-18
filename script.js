// an array of objects to hold quote data
var quotes = [
  {
    quote: "And now that you don't have to be perfect, you can be good.",
    source: "John Steinbeck",
    citation: "East of Eden",
    year: 1952
  },
  {
    quote: "If you are neutral in situations of injustice, you have chosen the side of the oppressor.",
    source: "Desmond Tutu"
  },
  {
    quote: "I think I am, therefore, I am. I think.",
    source: "George Carlin"
  },
  {
    quote: "Most things I worry about never happen anyway.",
    source: "Tom Petty",
    citation: "Crawling Back To You",
    year: 1994
  },
  {
    quote: "Expectation is the mother of all frustration.",
    source: "Antonio Banderas"
  }
];

//generates a random number
var randomNumber = Math.floor(Math.random() * quotes.length);

//uses random number generated to select & return a quote randomly
function getRandomQuote() {
  var randomQuote = quotes[randomNumber];
  return randomQuote;
};

//calls the getRandomQuote function & displays the final HTML string to the page
function printQuote() {
  var selectedQuote = getRandomQuote();
  var print = '<p class="quote">' + selectedQuote.quote + '</p>';
  print += '<p class="source">' + selectedQuote.source;
  if (selectedQuote.citation) {
    print += '<span class="citation">' + selectedQuote.citation + '</span>';
  };
  if (selectedQuote.year) {
    print += '<span class="year">' + selectedQuote.year + '</span>';
  };
  print += '</p>'

    document.getElementById('quote-box').innerHTML = print;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
