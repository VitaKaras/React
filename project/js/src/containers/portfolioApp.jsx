import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PortfolioItem from '../components/portfolioItem.jsx';

import * as actions from '../actions/portfolioActions.js';

let allImages = [
    {title: 'Image', category: 'Graphic Design', src: 'img/7.jpg'},
    {title: 'Image', category: 'Web Design', src: 'img/2.jpg'},
    {title: 'Image', category: 'Landing Pages', src: 'img/10.jpg'},
    {title: 'Image', category: 'Wordpress', src: 'img/1.jpg'},
    {title: 'Image', category: 'Graphic Design', src: 'img/8.jpg'},
    {title: 'Image', category: 'Web Design', src: 'img/4.jpg'},
    {title: 'Image', category: 'Graphic Design', src: 'img/9.jpg'},
    {title: 'Image', category: 'Web Design', src: 'img/5.jpg'},
    {title: 'Image', category: 'Landing Pages', src: 'img/3.jpg'},
    {title: 'Image', category: 'Wordpress', src: 'img/11.jpg'},
    {title: 'Image', category: 'Graphic Design', src: 'img/12.jpg'},
    {title: 'Image', category: 'Web Design', src: 'img/6.jpg'}
];

class PortfolioApp extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        let categories = ['All', 'Graphic Design', 'Web Design', 'Landing Pages', 'Wordpress'];

        let currCat = categories[this.props.currLink];
        let currImages = allImages;

        if (currCat !== 'All') {
            currImages = allImages.filter((item) => {
                return currCat === item.category;
            });
        }

        let items = currImages.map((item, index) => {
            return (
                <PortfolioItem key={index} title={item.title} category={item.category} src={item.src} />
            )
        });

        let links = categories.map((item, index) => {
            let classes = `work-nav-item ${this.props.currLink === index ? 'active' : ''}`;
            return (
                <li key={index}
                    className={classes}
                    onClick={() => this.props.changeLink(index)}>
                    {item}
                </li>
            );
        });

        return (
            <div id="about-block">
                <div className="work-nav-container">
                    <ul className="work-nav">
                        {links}
                    </ul>
                </div>
                <ul className="work-images">
                    {items}
                </ul>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        currLink: state.portfolio.currLink
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLink: actions.changeLink
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PortfolioApp);