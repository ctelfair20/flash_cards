import FlashCard from '../FlashCard/FlashCard';
import './TestView.css';

const TestView = ({ rawData }) => {
  // console.log(rawData);

  const mapData = () => {
    return rawData.map((questionObj, i) => {
      return <FlashCard key={i} questionObj={questionObj} />;
    });
  };

  return (
    <div id='test-view'>
      {mapData()}
    </div>
  );
}

export default TestView;