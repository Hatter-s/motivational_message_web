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
const random = randomQuoteAndBackground(quotes, quoteBackgrounds, quoteBackgroundsSmall);
  if (window.matchMedia("(max-width: 767px)").matches){
    document.body.style.backgroundImage =   `url(${random.smallBackground})`;
  } else {
    document.body.style.backgroundImage =   `url(${random.background})`;
  }
  document.getElementById('quote').innerHTML = random.quote;

//change status love button
let love = 0;
document.getElementById("love-button").onclick = function() {loveButton()};
document.getElementById("love-icon").className = 'bi bi-heart';
const loveButton = () => {
  if (love === 0) {
      document.getElementById("love-icon").className = 'bi bi-heart-fill';
      document.getElementById("love-button").title = 'unlove';
      love += 1;
  } else {
    document.getElementById("love-icon").className = 'bi bi-heart';
    document.getElementById("love-button").title = 'love';
    love -= 1;
  }
}
console.log(random.background);
console.log(random.smallBackground);

