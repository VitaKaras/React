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
            count: users.length,
            checked: true
        }
    },
    changeView: function(e){
        this.setState({
            checked: !this.state.checked
        })
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
                <input type="checkbox" value={this.state.checked} onChange={this.changeView} />
                <List items={this.state.users} isChacked={this.state.checked} />
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
        if(this.props.isChacked){
            return (
                <ul style={{color: this.state.color}}>
                    {this.props.items.map(function(item, index){
                        return <li key={index}>{"Name: " + item.name + ", gender: " + item.gender} </li>
                    })}
                </ul>
            )
        } else {
            return <Table elems={this.props.items} style={{color: this.state.color}} />
        }
      }
    })


var Table = React.createClass({
    render: function() {
         return ( 
            <table>
             <tbody style={this.props.style}>
                <tr>
                    <th> Name </th> 
                    <th> Gender </th> 
                </tr> 
             {this.props.elems.map(function(item, index) {
                     return ( 
                        <tr key={index} >
                             <td> { item.name } </td> 
                             <td> { item.gender } </td> 
                        </tr>
                    )
                })
             } 
             </tbody> 
            </table>
         )
    }
})

ReactDOM.render(<Field />, document.getElementById('root')); 


