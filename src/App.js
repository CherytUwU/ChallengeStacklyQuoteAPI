import React, { useState, useEffect } from "react";
import './App.css';
import './Quote.css'
import axios from 'axios';

  const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
      setTags(arrayOfQuotes.tags);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();    
  }, []);

  return (
    <div className="App">
      <div className="quoteButton">
            {" "}
              <button onClick={quoteAPI}><span className="random">Random</span><span className="material-icons random-icon" id="random">&#xe86a;</span></button>
        </div>
      <div className="App-b">
        <div className="App-c">
          
          <div className="quoteauthor">
            <h1 className="author">{author}</h1>
          </div>
          <div className="quoteBoxl">
            <div className="container">
              <div className="tags"><p>{tags}</p></div>
              <div className="quote"><p>"{quote}"</p></div>
            </div>
          </div>

          <div className="quoteBoxr">
            <div className="container">
              <div className="tags"><p>{tags}</p></div>
              <div className="quote"><p>"{quote}"</p></div>
            </div>
          </div>

          <div className="quoteBoxl">
            <div className="container">
              <div className="tags"><p>{tags}</p></div>
              <div className="quote"><p>"{quote}"</p></div>
            </div>
          </div>

          <div className="quoteBoxr">
            <div className="container">
              <div className="tags"><p>{tags}</p></div>
              <div className="quote"><p>"{quote}"</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default App;
