import React, { useState } from "react";
import "./styles.css";

var emojiLibrary = {
  "😎": "smiling face with sunglasses",
  "🤓": "nerd face",
  "😊": "Smiling Face",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "🙃": "Upside-Down Face",
  "🦍": "Gorilla",
  "😽": "kissing cat",
  "💯": "hundred points",
  "🐯": "Tiger Face",
  "🦄": "Unicorn",
  "🐼": "Panda Face",
  "🍍": "Pineapple",
  "🥳": "partying face",
  "💢": "anger symbol",
  "🍏": "Green Apple",
  "🍅": "Tomato",
  "🍄": "Mushroom",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🚴": "Person Biking",
  "🎌": "Flags",
  "😀": "grinning face",
  "😅": "grinning face with sweat",
  "😇": "smiling face with halo",
  "🥰": "smiling face with hearts",
  "😵‍💫": "face with spiral eyes"
};

var emojiKnown = Object.keys(emojiLibrary);

export default function App() {
  const [standsFor, setStandsFor] = useState("");

  return (
    <div className="App">
      <h1 id="heading">Inside Out</h1>
      <input onChange={inputChangeHandeler} id="input"></input>

      <div>
        <h4>Get Meaning</h4>
        <h3>{standsFor}</h3>
      </div>
      <div id="emoji">
        {emojiKnown.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => clickHandeler(emoji)}
              style={{ padding: "1rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );

  function clickHandeler(emoji) {
    //proccessing
    var standsFor = emojiLibrary[emoji];
    setStandsFor(standsFor);
  }

  function inputChangeHandeler(event) {
    //proccessing
    var userInput = event.target.value;
    var standsFor = emojiLibrary[userInput];
    if (standsFor === undefined) standsFor = "Away from our library";
    setStandsFor(standsFor);
  }
}
