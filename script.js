const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote_text_content');
const quoteAuthor = document.getElementById('quote_author_name');
const copyQuoteBtn = document.getElementById('copy-quote');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//Show new Quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(apiQuotes);

    //Check if Author field is empty and replace it with 'Unknown'
    if (!quote.author) {
        quoteAuthor.textContent = 'Unknown';
    } else {
        quoteAuthor.textContent = quote.author;
    }
    //Check Quote length to determinate styling
    if (quote.text.length > 150) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    //Set Quote
    quoteText.textContent = quote.text;
}

//Get Quotes from API
// const API = "https://type.fit/api";

// function getQuotes() {
// fetch(`${API}/quotes`)
//     .then(response => response.json())
//     .then(data => {data})
//     .catch(error => {
//         console.log(error);
//     })
//     newQuote();
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
        console.log('error');
    }
}


//Event listeners
newQuoteBtn.addEventListener('click', newQuote);


getQuotes();

