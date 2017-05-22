import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1> { this.props.number1 + this.props.number2 } </h1>;
    }
}

Component.propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number
};

Component.defaultProps = {
    number1: 3,
    number2: 14
};


ReactDOM.render( <Component number1 = { 4 } number2 = { 8 } />, document.getElementById("root"));