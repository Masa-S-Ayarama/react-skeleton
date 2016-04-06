var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Clothes" backgroundColor="white"/>, document.getElementById('clothes'));
ReactDOM.render(<ListManager title="Foods" backgroundColor="white"/>, document.getElementById('foods'));
ReactDOM.render(<ListManager title="Toys" backgroundColor="white"/>, document.getElementById('toys'));
ReactDOM.render(<ListManager title="Weather" backgroundColor="orange"/>, document.getElementById('weather'));
ReactDOM.render(<ListManager title="Shot Views" backgroundColor="orange"/>, document.getElementById('views'));
ReactDOM.render(<ListManager title="Likes" backgroundColor="orange"/>, document.getElementById('likes'));
ReactDOM.render(<ListManager title="Comments" backgroundColor="orange"/>, document.getElementById('comments'));
