import React, { useState, useEffect } from "react";
import './NewWord.css';
export const ButtonGrid = () => {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {
    fetchRandomWords();
  }, []);

  const fetchRandomWords = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=16"
      );

      if (response.ok) {
        const data = await response.json();
        // const words = data.map((wordObj) => wordObj.word);
        setWords(data);
      } else {
        console.log("Failed to fetch random words.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleClick = (word) => {
    setSelectedWord(word);
    speakWord(word);
  };

  const speakWord = (word) => {
    // Code to invoke text-to-speech API with the "word" parameter
    // Implement the text-to-speech functionality using the desired library or API
    // For example, you can use the Web Speech API or a third-party library like SpeechSynthesisUtterance.
    // Here's a basic example using the Web Speech API:
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(speech);
    } else {
      console.log("Text-to-speech not supported in this browser.");
    }
  };

  const renderButtons = () => {
    return words.map((word, index) => (
      <button key={index} onClick={() => handleClick(word)}>
        {word}
      </button>
    ));
  };

  const handleWordChange = () => {
    setSelectedWord("");
    fetchRandomWords();
  };

  return (
    <div className="button-grid">
      <div>
        {words.length > 0 ? (
          renderButtons()
        ) : (
          <p>Loading words...</p>
        )}
      </div>
      <div>
        {selectedWord && <p>Selected word: {selectedWord}</p>}
        <button onClick={handleWordChange}>Change Words</button>
      </div>
    </div>
  );
};

export default ButtonGrid;
