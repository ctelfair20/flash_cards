import { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ questionObj }) => {
  const [isFlipped, setFlipped] = useState(false);
  // add click event to flip card to show answer
  return (
    <div id="flashcard-container" onClick={() => { setFlipped(!isFlipped) }}>
      {isFlipped ? `A: ${questionObj.answer}` : `Q: ${questionObj.question}`}
    </div>
  );
}

export default FlashCard;