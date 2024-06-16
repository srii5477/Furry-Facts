import React from 'react';
import {useState} from 'react';
import Button from './Button';
import axios from 'axios';
import Footer from './Footer';


const CatFact = () => {
  const [facts, setFacts] = useState(["House cats share 95.6% of their genetic makeup with tigers.", "Cats have an average of 24 whiskers, arranged in four horizontal rows on each side", "A cat has more bones than a human; humans have 206, and the cat - 230."]);
  const [count, setCount] = useState();
//   useEffect(() => {
//       getFacts();
//   }, [])
  const getFacts = () => {
    console.log("called");
    axios.get(`https://meowfacts.herokuapp.com/?count=${count}`).then((res) => {
        console.log(res.data.data);
        setFacts(res.data.data);
    }).catch((err) => console.error(err));
  }
  return (
    <div>
    <input type="number" value={count} onChange={(val) => setCount(val.target.value)} placeholder="How many facts do you want?" />
    <Button call={getFacts} />
    <div> <h3> Did you know?  </h3> <h5><div class="card">{facts.map((fact) => (<div class="cd">{fact}</div>))}</div></h5></div>
    <Footer />
    </div>
  );
}

export default CatFact