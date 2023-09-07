import { useState } from 'react';
import './App.css';
import { FaTwitter, FaTumblr ,FaQuoteLeft,} from "react-icons/fa";
import quotes from "./assets/quotes.json";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};


const transition = "all 2s"


function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {

    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());

  };

  return (
  
    <div className='background' style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor, transition}} >

          <h2 id="text" >
            <FaQuoteLeft size="30" style={{ marginRight: "10px"}} />
            {quote.quote}
          
          </h2>
         

          <h4 id="author">- {quote.author}</h4>

        </div>
          <div className="buttons">

            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.quote}"${quote.author}`} id="tweet-quote" style={{ backgroundColor: randomColor , transition }}>
              <FaTwitter color="white" />
            </a>

            <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='${quote.author}'&content='${quote.quote}'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} id="tumblr-quote" style={{ backgroundColor: randomColor , transition: "all 2s"}}>
              <FaTumblr color="white" />
            </a>

            <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor , transition }}>Change Quote</button>

          </div>
      </div>
    </div>

  );
}

export default App
