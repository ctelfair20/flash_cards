import './FlashCard.css';

const FlashCard = ({ questionObj }) => {

  return (
    <div id="flashcard-container">
      <span>
        {questionObj.question}
      </span>
      <span>
        {questionObj.answer}
      </span>
    </div>
  );
}

export default FlashCard;