var React = require('react');
var ReactDOM = require('react-dom');

var users = [{name:"Anne Montgomery",gender:"Female"},
            {name:"Annie George",gender:"Female"},
            {name:"Gary Butler",gender:"Male"},
            {name:"Lisa Mendoza",gender:"Female"},
            {name:"Marilyn Henry",gender:"Female"},
            {name:"Johnny Tucker",gender:"Male"},
            {name:"Chris Jacobs",gender:"Male"},
            {name:"Benjamin James",gender:"Male"}]; 

function getRandomColor() {
    var h = Math.floor(Math.random() * (255 - 1) + 1); 
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%'; 
    var l = '50%'; 
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}

var Field = React.createClass({
    getInitialState: function(){
        return {
            users: users,
            count: users.length
        }
    },
    changeCount: function(e){
        var currCount = e.target.value;
        this.setState({
            users: users.slice(0, currCount),
            count: currCount
        })
    },
    render: function() {
        return (
            <div>
                <input type="number" value={this.state.count} min='0' max={users.length} onChange={this.changeCount} />
                <List items={this.state.users} />
            </div>
        )}
    }) 
         
var List = React.createClass({
    getInitialState:function(){
        return {
            color: 'green'
        }
    },
    componentWillReceiveProps(){
        this.setState({
            color:getRandomColor()
        });
    },
    render: function() {
        return (
            <ul style={{color: this.state.color}}>
                {this.props.items.map(function(item, index){
                    return <li key={index}>{"Name: " + item.name + ", gender: " + item.gender} </li>
                })}
            </ul>
        )}
    })

ReactDOM.render(<Field />, document.getElementById('root')); 
