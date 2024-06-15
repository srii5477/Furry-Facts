import image from "./cat-simple-vector-black-image-white-background-silhouette-svg-vector-cat-simple-vector-black-image-white-background-272686278.jpg";
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
    </div>
  );
}

export default App;
