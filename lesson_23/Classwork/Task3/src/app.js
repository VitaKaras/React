import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.js';

export default class App extends React.Component{
   
    render() {
           return (
           <div>
           		List of users:
           		<List />
           </div>
    )}
}