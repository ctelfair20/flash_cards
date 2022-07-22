import './FlashCard.css';

const FlashCard = ({ questionObj }) => {

  // add click event to flip card to show answer
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