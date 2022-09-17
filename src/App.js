import "./styles.css";
import React, { useState } from "react";

var dictionary = {
  "🇦🇫": "Afghanistan",
  "🇦🇷": "Argentina",
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇧🇭": "Bahrain",
  "🇧🇷": "Brazil",
  "🇨🇦": "Canada",
  "🇨🇭": "Switzerland",
  "🇨🇳": "China",
  "🇩🇪": "Germany",
  "🇩🇰": "Denmark",
  "🇪🇬": "Egypt",
  "🇫🇷": "France",
  "🇬🇷": "Greece",
  "🇮🇱": "Israel",
  "🇮🇳": "India",
  "🇮🇷": "Iran",
  "🇮🇶": "Iraq",
  "🇮🇹": "Italy",
  "🇲🇲": "Myanmar",
  "🇲🇺": "Mauritius",
  "🇳🇵": "Nepal",
  "🇵🇪": "Peru",
  "🇵🇰": "Pakistan",
  "🇸🇪": "Sweden",
  "🇹🇭": "Tahiland",
  "🇹🇼": "Taiwan",
  "🇺🇸": "United States",
  "🇺🇳": "United Nations",
  "🇻🇳": "Vietnam"
};

var emojis = Object.keys(dictionary);

export default function App() {
  const [state, updateState] = useState("");

  function itemInputHandler(event) {
    var userInput = event.target.value;
    var state = dictionary[userInput];

    if (state === undefined) {
      console.log("We don't have this in our database.");
    }

    updateState(state);
  }

  function emojiClickHandler(item) {
    var state = dictionary[item];
    updateState(state);
  }

  return (
    <div className="App">
      <h1>Flag Emoji Interpreter</h1>
      <p>
        We often get confused between flags of different nationalities. Try this
        Flag Identifier to know and improve your knowledge about flags of
        different nations.
      </p>
      <input placeholder="Insert the Emoji" onChange={itemInputHandler} />
      <h2>{state}</h2>
      <p>Click on Flag to know more about it.</p>
      {emojis.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
