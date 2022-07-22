import NavBar from './components/NavBar/NavBar';
import TestView from './components/TestView/TestView';
import rawData from './rawData';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <TestView rawData={rawData} />
    </>
  );
}

export default App;
