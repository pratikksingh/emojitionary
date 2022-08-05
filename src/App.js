import "./App.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": ["smiling"],
  "😳": ["disbelief"],
  "😔": ["sad"],
  "🥡": ["takeout box"],
  "❤️": ["love"],
  "😑": ["annoyance"],
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setemoji] = useState("");

  function change(event) {
    var userInput = event.target.value;

    var emoji = emojiDictionary[userInput];

    if (emoji === undefined) {
      emoji = "Oops! we don't have this emoji in our emoji-tionary";
    }
    setemoji(emoji);
  }

  function clickHandler(event, item) {
    const emojiNames = emojiDictionary[item];
    setemoji(emojiNames[0]);
  }

  return (
    <div className="App">
      <h1>Emoji-tionary</h1>
      <input
        placeholder="Enter your emoji here.."
        className="input"
        onChange={change}
      />

      <div className="meaning">
        <h2> {emoji} </h2>
        <ol>
          {emojiList.map((item) => {
            return (
              <li
                key={item}
                style={{ cursor: "pointer" }}
                onClick={(e) => clickHandler(e, item)}
                className="list"
              >
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
