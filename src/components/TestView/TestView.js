import { useState } from 'react';
import Parent from '../useContext/Parent'; // testing useContext
import Parent2 from '../useContext/useContext2/Parent'; // testing useContext again
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
      <Parent2 />
      {mapData()}
    </div>
  );
}

export default TestView;