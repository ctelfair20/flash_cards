import FlashCard from '../FlashCard/FlashCard';
import './TestView.css';

const TestView = ({ rawData }) => {

  const mapData = (rawData) => {
    mapData.map((questionObj, i) => {
      return <FlashCard key={i} questionObj={questionObj} />;
    });
  };

  return (
    <main id='test-view'>
      {mapData()}
    </main>
  );
}

export default TestView;