import quotes from "./quotes.js";
import { quoteBackgrounds, quoteBackgroundsSmall} from "./quote_bg.js";

const randomQuoteAndBackground = (quotes, backgrounds, backgroundsSmall) => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const randomBackground = Math.floor(Math.random() * backgrounds.length);
    
    return {
        quote: quotes[randomQuote].quote,
        author: quotes[randomQuote].author,
        background : backgrounds[randomBackground],
        smallBackground : backgroundsSmall[randomBackground]
    };
}


console.log(randomQuoteAndBackground(quotes, quoteBackgrounds, quoteBackgroundsSmall));