import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [emotion, setEmotion] = useState("happy");
  const [quote, setQuote] = useState({});
  
  // Emotion-based quotes
  const quotes = {
    happy: [
      { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
      { text: "Smile, and the world smiles with you.", author: "Stanley Gordon West" },
      { text: "Do more of what makes you happy.", author: "Unknown" }
    ],
    sad: [
      { text: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
      { text: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
      { text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo" }
    ],
    angry: [
      { text: "For every minute you are angry, you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
      { text: "Anger is one letter short of danger.", author: "Eleanor Roosevelt" },
      { text: "Speak when you are angry and you will make the best speech you will ever regret.", author: "Ambrose Bierce" }
    ],
    calm: [
      { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
      { text: "Calm mind brings inner strength.", author: "Dalai Lama" },
      { text: "The nearer a man comes to a calm mind, the closer he is to strength.", author: "Marcus Aurelius" }
    ],
    love: [
      { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
      { text: "We are most alive when we're in love.", author: "John Updike" },
      { text: "Love recognizes no barriers.", author: "Maya Angelou" }
    ]
  };

  // Background images for each emotion
  const backgrounds = {
    happy: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9271/iStock-187164601-e1507133295972.jpg",
    sad: "https://getwallpapers.com/wallpaper/full/9/5/0/688655-free-download-sad-wallpapers-1920x1080-phone.jpg",
    angry: "https://t3.ftcdn.net/jpg/09/74/88/00/360_F_974880091_zYU1tbUtUahZd8kNwR3BzwXyu5bCM5Cu.jpg",
    calm: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    love: "https://images5.alphacoders.com/873/873178.jpg"
  };

  // Generate a random quote
  const generateQuote = (emo) => {
    const quoteList = quotes[emo];
    const random = quoteList[Math.floor(Math.random() * quoteList.length)];
    setQuote(random);
    setEmotion(emo);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgrounds[emotion]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        textAlign: "center",
        transition: "background-image 0.5s ease-in-out",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Emotion-Based Quote Generator
      </h1>

      <div>
        {Object.keys(quotes).map((emo) => (
          <button
            key={emo}
            onClick={() => generateQuote(emo)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              backgroundColor:
                emotion === emo ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.3)",
              color: emotion === emo ? "black" : "white",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {emo.charAt(0).toUpperCase() + emo.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "40px", background: "rgba(0,0,0,0.5)", padding: "20px", borderRadius: "20px", maxWidth: "600px", marginInline: "auto" }}>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
          "{quote.text || 'Click an emotion to get a quote!'}"
        </p>
        {quote.author && <p style={{ marginTop: "10px", fontWeight: "bold" }}>— {quote.author}</p>}
      </div>
    </div>
  );
};

export default App;
