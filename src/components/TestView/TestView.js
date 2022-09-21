import { useState } from 'react';
import Parent from '../useContext/Parent'; // testing useContext
import FlashCard from '../FlashCard/FlashCard';
import rawData from '../../rawData';
import './TestView.css';

const TestView = () => {
  const [flashcards, setFlashcards] = useState(rawData)
  const mapData = () => {
    return flashcards.map((questionObj, i) => {
      return <FlashCard key={i} questionObj={questionObj} />;
    });
  };

  return (
    <div id='test-view'>
      <Parent />
      {mapData()}
    </div>
  );
}

export default TestView;