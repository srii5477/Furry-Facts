import React from 'react';
import {useState} from 'react';
import Button from './Button';
import axios from 'axios';


const CatFact = () => {
  const [facts, setFacts] = useState(["House cats share 95.6% of their genetic makeup with tigers."]);
  const [count, setCount] = useState(1);
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
    <input type="number" value={count} onChange={(val) => setCount(val.target.value)} placeholder="How many facts do you want to see?" />
    <Button call={getFacts} />
    <div> <h4> Did you know?  </h4> <h5><ul>{facts.map((fact) => (<li>{fact}</li>))}</ul></h5></div>
    </div>
  );
}

export default CatFact