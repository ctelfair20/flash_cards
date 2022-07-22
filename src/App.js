// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TestView from './components/TestView/TestView';
import FlashCard from './components/FlashCard/FlashCard';

function App() {
  return (
    <>
      <NavBar />
      <TestView>
        <FlashCard />
      </TestView>
    </>
  );
}

export default App;
