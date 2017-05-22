import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


class HomeSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let scrollOptions = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true
        };      
        return (
            <section id="home">
                 <div className="slider-container">
                    <div className="container">
                        <div className="slider-nav-container">
                            <span className="slider-nav-left" >
                                <i className="fa fa-angle-left" style={{fontSize:'40px'}} />
                            </span>
                            <span className="slider-nav-right" >
                                <i className="fa fa-angle-right" style={{fontSize:'40px'}} />
                            </span>
                        </div>
                    </div>
                     <ul  className="slider">
                        <li className="slider-item" style={{ background: 'url("./img/home-bg1.jpg")',  backgroundSize: 'cover'}}>
                            <div className="slider-content">
                                <div className="container slider-content-container">
                                    <h1 className="slider-text1">The ham is <span className="text-highlight">a psd template</span></h1>
                                    <h2 className="slider-text2">We are creative</h2>
                                    <p className="slider-text3">Nam varius accumsan elementum aliquam</p>
                                    <div className="slider-btn-container">
                                        <ScrollLink className="btn home-btn" to="work" {...scrollOptions}>Explore now</ScrollLink>
                                        <ScrollLink className="btn home-btn" to="contact" {...scrollOptions}>Purchase now</ScrollLink>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="home-options clearfix">
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <p className="option-text">Personalized options</p>
                    </li>
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <h2 className="option-text">Fully customizable</h2>
                    </li>
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <h2 className="option-text">Unlimited support</h2>
                    </li>
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <h2 className="option-text">Responsive all device</h2>
                    </li>
                </ul>
            </section>
        )
    }
}

export default HomeSection;