import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Carousel from './carousel';

ReactDOM.render(
  <React.StrictMode>
    <Carousel frameUrl={"./img/frame.png"} imgUrls={['./img/carrot1.png', './img/img2.png', './img/img3.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('carousel-container1')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
