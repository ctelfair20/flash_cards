import rawData from '../../rawData';
import FlashCard from './components/FlashCard/FlashCard';
import './TestView.css';

const TestView = () => {

  const mapData = rawData.map((questionObj, i) => {
    return <FlashCard questionObj={questionObj} />;
  });

  return (
    <div key={i}>
      {mapData()}
    </div>
  );
}

export default TestView;