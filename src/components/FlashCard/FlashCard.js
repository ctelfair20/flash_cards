import './FlashCard.css';

const FlashCard = ({ questionObj }) => {

  return (
    <div id="flashcard-container">
      <span>
        {`Q: ${questionObj.question}`}
      </span>
      {/* <span>
        {`A: ${questionObj.answer}`}
      </span> */}
    </div>
  );
}

export default FlashCard;