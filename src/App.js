import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Cards from './components/Cards';

function App() {

  return (
    <div className="App">
      <div className='container-header'>
        <h1>7 Days Inspirational Cards</h1>
      </div>
      <Cards />
    </div>
  );
}

export default App;
