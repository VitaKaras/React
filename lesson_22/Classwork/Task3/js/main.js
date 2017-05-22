var React = require('react');
var ReactDOM = require('react-dom');

class PropsComponentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.showProps = this.showProps.bind(this);
  }
  showProps(e){
    this.setState({clicked: true});
  }
  render() {    
    return (
      <div>
        <button onClick={this.showProps}>Show props of Component</button>
          {this.state.clicked ?  
            (<ul>
                {Object.keys(this.props).map((key, index) =><li key={index}>{`${index + 1}) ${key}: ${this.props[key]}`}</li>)}
            </ul>) : null
          }
      </div>
    );
  }
}

ReactDOM.render(<PropsComponentList prop1="weight" prop2="height" prop3="width" prop4="length"/>, document.getElementById("root"));