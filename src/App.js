//import logo from './fav-icon.png';
import sliderimage from './cricket-big.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './App.css';
import React, { Component } from "react";
import Slider from "react-slick";


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      }]
    };
    const slider = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
      breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      },{
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
      }
    },{
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
      }
    }]
    };
    return (
      <div className="wrapper">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="item">
            <img src={sliderimage} alt="slider" />
          </div>
          <div className="item">
            <img src={sliderimage} alt="slider" />
          </div>
          <div className="item">
            <img src={sliderimage} alt="slider" />
          </div>
          <div className="item">
            <img src={sliderimage} alt="slider" />
          </div>
          <div className="item">
            <img src={sliderimage} alt="slider" />
          </div>
          <div className="item">
            <img src={sliderimage} alt="slider" />
          </div>
        </Slider>
        <br /><br />
        <h2> Multiple Item</h2>
        <Slider className="multipleslider" {...slider}>
          <div>
            <h3><img src={('./images/pv-sindhu.jpg')} alt="slider" /></h3>
          </div>
          <div>
            <h3><img src={('./images/tracker-img1.png')} alt="slider" /></h3>
          </div>
          <div>
            <h3><img src={('./images/tracker-img2.png')} alt="slider" /></h3>
          </div>
          <div>
            <h3><img src={('./images/tracker-img3.png')} alt="slider" /></h3>
          </div>
          <div>
            <h3><img src={('./images/pv-sindhu.jpg')} alt="slider" /></h3>
          </div>
          <div>
            <h3><img src={('./images/tracker-img1.png')} alt="slider" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
