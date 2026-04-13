import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Carousel from './carousel';
import ReactPlayer from 'react-player';


const renderSeguro = (componente, id) => {
  try {
    const el = document.getElementById(id);
    if (el) {
      ReactDOM.render(
        <React.StrictMode>
          {componente}
        </React.StrictMode>,
        el
      );
    } else {
      console.warn(`#${id} não existe`);
    }
  } catch (err) {
    console.error(`Erro ao renderizar #${id}:`, err);
  }
};

const inicializarSite = () => {
  // 1. VÍDEOS (Estes geram os erros de postMessage, mas agora estão isolados)
  renderSeguro(<ReactPlayer className='react-player' url='https://youtu.be/M7zJXKHKDDg'/>, 'akumi-wars');
  renderSeguro(<ReactPlayer className='react-player' url='https://youtu.be/7jCUEVq-tjc'/>, 'hidden-in-light');
  renderSeguro(<ReactPlayer className='react-player' url='https://youtu.be/_47nkjGdIoQ'/>, 'psi');
  renderSeguro(<ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=OrJVpwAh1VI'/>, 'deepnagogia');
  renderSeguro(<ReactPlayer className='react-player' url='https://youtu.be/53DPw9dYZhc'/>, 'gomma');
  renderSeguro(<ReactPlayer className='react-player' url='https://youtu.be/ltGq1BUhrq4' playing loop/>, 'hungerfordungeon');

  renderSeguro(
  <Carousel 
    imgUrls={['/img/arida1.png', '/img/arida2.png', '/img/arida3.png', '/img/arida4.png', '/img/arida5.png']} 
    rightArrowUrl="/img/rightArrow.png" 
    leftArrowUrl="/img/leftArrow.png"
  />, 
  'arida-carousel-container'
);

  // 3. OUTROS CARROSSEIS
  renderSeguro(<Carousel imgUrls={['/img/sinergia1.png', '/img/sinergia2.png', '/img/sinergia3.png', '/img/sinergia4.png']}
     rightArrowUrl="/img/rightArrow.png" leftArrowUrl="/img/leftArrow.png"/>, 'games-sinergia');

  renderSeguro(<Carousel imgUrls={['/img/bk1.png', '/img/bk2.png', '/img/bk3.png', '/img/bk4.png']}
     rightArrowUrl="/img/rightArrow.png" leftArrowUrl="/img/leftArrow.png"/>, 'blank-knight');
  renderSeguro(<Carousel imgUrls={['/img/carrot1.png', '/img/carrot2.png', '/img/carrot3.png', '/img/carrot4.png']}
     rightArrowUrl="/img/rightArrow.png" leftArrowUrl="/img/leftArrow.png"/>, 'carrot');
};

// Força a execução apenas quando TUDO estiver carregado
window.onload = inicializarSite;

serviceWorker.unregister();