import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Carousel from './carousel';
import ReactPlayer from 'react-player'

ReactDOM.render(
  <React.StrictMode>
    {/* <Carousel imgUrls={['./video/pathlinesvideo.mp4', './img/pathlines1.jpg', './img/pathlines2.jpg', './img/pathlines3.jpg']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/> */}
    <ReactPlayer url='https://www.youtube.com/watch?v=cIEsTXt4zh0' playing/>
  </React.StrictMode>,
  document.getElementById('pathlines')
);

ReactDOM.render(
  <React.StrictMode>
    <Carousel imgUrls={['./img/arida1.png', './img/arida2.png', './img/arida3.png', './img/arida4.png', './img/arida5.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('arida')
);

ReactDOM.render(
  <React.StrictMode>
    <Carousel imgUrls={['./img/sinergia1.png', './img/sinergia2.png', './img/sinergia3.png', './img/sinergia4.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('games-sinergia')
);

ReactDOM.render(
  <React.StrictMode>
    <Carousel imgUrls={['./img/blankknight1.png', './img/blankknight2.png', './img/blankknight3.png', './img/blankknight4.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('blank-knight')
);

ReactDOM.render(
  <React.StrictMode>
    <Carousel imgUrls={['./img/carrot1.png', './img/carrot2.png', './img/carrot3.png', './img/carrot4.png']} rightArrowUrl={"./img/rightArrow.png"} leftArrowUrl={"./img/leftArrow.png"}/>
  </React.StrictMode>,
  document.getElementById('carrot')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
