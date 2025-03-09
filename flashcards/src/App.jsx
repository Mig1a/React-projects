import { useState } from 'react';
import './App.css';

const Move = ({ data }) => {
  const [word, setWord] = useState(data[0]);
  const [track, setTrack] = useState(0);

  const cardsInfo = () => {
    if (track < data.length - 1) {
      setWord(data[track + 1]);
    }
  };

  const forward = () => {
    if (track < data.length - 2) {
      setTrack(track + 2);
      setWord(data[track + 2]);
    } else {
      setWord("End of card");
    }
  };

  const backward = () => {
    if (track > 1) {
      setTrack(track - 2);
      setWord(data[track - 2]);
    } else {
      setWord(data[0]);
    }
  };

  return (
    <>
      <div className="Card">
        <button type="button" onClick={cardsInfo}>{word}</button>
      </div>

      <div className="move">
        <button type="button" onClick={backward}>-</button>
        <button type="button" onClick={forward}>+</button>
      </div>
    </>
  );
};

function App() {
  const bibleArray = [
    "start", "click next",
    "title", "Holy Bible",
    "numberOfBooks", 66,
    "oldTestamentBooks", 39,
    "newTestamentBooks", 27,
    "languagesTranslated", ["English", "Spanish", "French", "Greek", "Hebrew"],
    "firstBook", "Genesis",
    "lastBook", "Revelation",
    "mostQuotedVerse", "John 3:16",
    "authors", ["Moses", "David", "Isaiah", "Matthew", "Paul", "John"],
    "genres", ["Law", "History", "Poetry", "Prophecy", "Gospels", "Epistles"],
    "funFact", "The Bible is the best-selling book of all time."
  ];

  return (
    <>
      <div className="App">
        <h1>The Ultimate Planet Parent!</h1>
        <h4>How good of a plant parent are you? Test all your planty knowledge here!</h4>
        <h6>Number of cards: {bibleArray.length / 2}</h6>
      </div>

      <Move data={bibleArray} />
    </>
  );
}

export default App;
