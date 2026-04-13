import React from 'react';
import './carousel.css';

class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          currentImageIndex: 0,
          timer: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.incrementTimer(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    incrementTimer() {
        const { imgUrls } = this.props;
        if (!imgUrls || imgUrls.length === 0) return; // Segurança contra crash

        if (this.state.timer >= 3) {
            this.nextSlide();
        } else {
            this.setState({ timer: this.state.timer + 1 });
        }
    }

    previousSlide() {
        const { imgUrls } = this.props;
        if (!imgUrls) return;
        const index = this.state.currentImageIndex === 0 ? imgUrls.length - 1 : this.state.currentImageIndex - 1;
        this.setState({ currentImageIndex: index, timer: 0 });
    }
    
    nextSlide() {
        const { imgUrls } = this.props;
        if (!imgUrls) return;
        const index = this.state.currentImageIndex === imgUrls.length - 1 ? 0 : this.state.currentImageIndex + 1;
        this.setState({ currentImageIndex: index, timer: 0 });
    }

    render() {
        const { imgUrls, leftArrowUrl, rightArrowUrl } = this.props;

        // Se as imagens não chegaram, não renderiza nada (evita o erro)
        if (!imgUrls || imgUrls.length === 0) return null;

        return (
            <div className="carousel">
                <Arrow clickFunction={this.previousSlide} url={leftArrowUrl} />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
                <Arrow clickFunction={this.nextSlide} url={rightArrowUrl} />
            </div>
        );
    }
}

const ImageSlide = ({ url }) => {
    // Se a URL começar com http, é externa. Se não, injeta o prefixo da public
    const path = url.startsWith('http') ? url : process.env.PUBLIC_URL + url;
    
    return (
        <div className="image-slide">
            <img src={path} alt="" />
        </div>
    );
}

const Arrow = ({ clickFunction, url }) => {
    const path = url.startsWith('http') ? url : process.env.PUBLIC_URL + url;
    
    return (
        <div className="slide-arrow" onClick={clickFunction}>
            <img src={path} alt="" />
        </div>
    );
};

export default Carousel;