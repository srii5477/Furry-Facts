import React from 'react';
import {useState, useEffect} from 'react';
import Button from './Button';
import axios from 'axios';


const CatFact = () => {
  const [facts, setFacts] = useState([]);
  const [count, setCount] = useState(1);
//   useEffect(() => {
//       getFacts();
//   }, [])
  const getFacts = () => {
    axios.get(`https://meowfacts.herokuapp.com/?count=${count}`).then((res) => {
        console.log(res.data.data);
        setFacts(res.data.data);
    }).catch((err) => console.error(err));
  }
  return (
    <div>
    <input type="number" value={count} onChange={(val) => setCount(val.target.value)} placeholder="How many facts do you want to see?" />
    <Button call={getFacts} />
    <div> <h4> Did you know?  </h4> <ul>{facts.map((fact) => (<li>{fact}</li>))}</ul></div>
    </div>
  )
}

export default CatFact