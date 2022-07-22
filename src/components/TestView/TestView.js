import rawData from '../../rawData';
import FlashCard from '../FlashCard/FlashCard';
import './TestView.css';

const TestView = () => {

  const mapData = rawData.map((questionObj, i) => {
    return <FlashCard key={i} questionObj={questionObj} />;
  });

  return (
    <main id='test-view'>
      {mapData()}
    </main>
  );
}

export default TestView;