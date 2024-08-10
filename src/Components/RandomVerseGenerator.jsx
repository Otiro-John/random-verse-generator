import { useState, useEffect } from 'react';
import './Random.css';

const RandomVerseGenerator = () => {
  const [verse, setVerse] = useState({ text: '', verse: '' });

  // Function to fetch random verses
  const randomVerses = async () => {
    try {
      const response = await fetch("https://type.fit/api/verses");
      const resData = await response.json();
      // Get a random verse from the array
      const randomIndex = Math.floor(Math.random() * resData.length);
      setVerse(resData[randomIndex]);
    } catch (error) {
      console.error('Error fetching verse:', error);
    }
  };

  useEffect(() => {
    randomVerses(); // Fetch a random verse when the component mounts
  }, []);

  return (
    <div className="verse-container">
      <div className="verse-card">
        <p className="verse-text">{verse.text}</p>
        <p className="verse-reference">- {verse.verse}</p>
        <button onClick={randomVerses} className="verse-button">Generate Random Verse</button>
      </div>
    </div>
  );
};

export default RandomVerseGenerator;
