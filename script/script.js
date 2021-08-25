import quotes from "./quotes.js";
import quoteBackground from "./quote_bg.js";

const randomQuoteAndBackground = (quotes, background) => {
    const randomNumber = Math.floor(Math.random() * 50);
    
    return {
        quote: quotes[randomNumber].quote,
        author: quotes[randomNumber].author,
        background : background[randomNumber]
    };
}


console.log(randomQuoteAndBackground(quotes,quoteBackground));