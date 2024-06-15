import React from 'react';
import '../stylesheets/App.css';
import cat1 from "../200w.gif";
import cat2 from "../94f0653d30bd368e5dfe492f0f60e01e.gif";
import cat3 from "../source.gif";
import cat4 from "../plink-cat-plink.gif";

const Cat = (props) => {
  return (
    <div class="footer">
        <img class="gif" src={cat1} />
        <img class="gif" src={cat2} />
        <img class="gif" src={cat3} />
        <img class="gif" src={cat4} />
    </div>
  );
}

export default Cat