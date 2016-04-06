/* This is the entry point file for our application. This is the file you will use to construct
 * your HTML. You will use your pre-created Components and then locate the HTML elements thet you created
 * in your index.html and render the Component
*/

var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" header="Please input ingredients:" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo" header="Please input todo list:" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" header="Please input presents:" headingColor="#b31217" />, document.getElementById('christmas'));
