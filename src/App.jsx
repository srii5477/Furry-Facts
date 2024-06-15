import image from './cat-simple-vector-black-image-white-background-silhouette-svg-vector-cat-simple-vector-black-image-white-background-272686278.jpg';
import './stylesheets/App.css';
import CatFact from './components/CatFact';
import image1 from './images.jpg';
import image2 from './images1.jpg';
import image3 from './images2.jpg';

function App() {
  return (
    <div className="App">
      <h1> Get a Furry Fact </h1>
      <br></br>
      <img src={image} alt="cat pic" />
      <h3> Get to know something interesting about our furry friends! </h3>
      <CatFact />
      <div class="footer">
        <img src={image1} alt="cat pic" />
        <img src={image2} alt="cat pic" />
        <img src={image3} alt="cat pic" />
      </div>
    </div>
  );
}

export default App;
