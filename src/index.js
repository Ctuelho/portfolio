import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Carousel from './carousel';

ReactDOM.render(
  <React.StrictMode>
    <Carousel frameUrl={"./img/frame.png"} imgUrls={['./img/arida1.png', './img/arida2.png', './img/arida3.png', './img/arida4.png', './img/arida5.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('arida')
);

ReactDOM.render(
  <React.StrictMode>
    <Carousel frameUrl={"./img/frame.png"} imgUrls={['./img/blankknight1.png', './img/blankknight2.png', './img/blankknight3.png', './img/blankknight4.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('blank-knight')
);

ReactDOM.render(
  <React.StrictMode>
    <Carousel frameUrl={"./img/frame.png"} imgUrls={['./img/carrot1.png', './img/carrot2.png', './img/carrot3.png', './img/carrot4.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('carrot')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
