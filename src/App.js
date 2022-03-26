import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Selected from './components/Selected-Items/Selected';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
