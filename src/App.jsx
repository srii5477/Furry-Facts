import image from './16302fd72cbce21a2b4b890c0ca57868.png';
import './stylesheets/App.css';
import CatFact from './components/CatFact';

function App() {
  return (
    <div className="App">
      <h1> Get a Furry Fact </h1>
      <br></br>
      <img src={image} alt="cat pic" />
      <h3> Get to know something interesting about our furry friends! </h3>
      <CatFact />
      <div class="footer">
        
      </div>
    </div>
  );
}

export default App;
