import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
