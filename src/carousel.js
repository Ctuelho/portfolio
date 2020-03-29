import React from 'react';
import './carousel.css';

class Carousel extends React.Component {
    
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0,
          frameUrl: props.frameUrl,
          imgUrls: props.imgUrls,
          leftArrowUrl: props.leftArrowUrl,
          rightArrowUrl: props.rightArrowUrl,
          timer: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.incrementTimer(1), 1000);
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    incrementTimer(value){
        var totalTime = this.state.timer + value;
        if(totalTime >= 3){
            this.nextSlide();
        }else{
            this.setState({
                timer: totalTime
              });
        }
    }

    previousSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index,
          timer: 0
        });
    }
    
     nextSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index,
          timer: 0
        });
    }

    render () {
        return (
            <div className="carousel">

                <Arrow
                    clickFunction={ this.previousSlide }
                    url={this.state.leftArrowUrl}
                />

                <ImageSlide url={this.state.imgUrls[this.state.currentImageIndex]} frameUrl={this.state.frameUrl} />

                <Arrow
                    clickFunction={ this.nextSlide }
                    url={this.state.rightArrowUrl}
                />

            </div>
        );
    }
}

const ImageSlide = ({ url }) => {
    return (
        <div className="image-slide">
            <img src={url} alt =""/>
        </div>
    );
}

const Arrow = ({ clickFunction, url }) => (
    <div
        className={"slide-arrow"}
        onClick={ clickFunction }
    >
        <img src={url} alt =""/>
    </div>
); 

export default Carousel;