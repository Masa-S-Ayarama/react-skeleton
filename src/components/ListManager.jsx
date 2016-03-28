var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    //Define Properties of object,
    //every react in component will call this funtion just once when loaded
    getInitialState: function() {
      return {items: [], newItemText: ''};
    },
    //
    onChange: function(e) {
      this.setState({newItemText: e.target.value});
    },
    //function call when button was pressed, 'e' = element
    handleSubmit: function(e) {
      //make event not occur on click button itself or on accident,
      //but occur on html form submit function
      e.preventDefault();

      //each component has 'props' and 'state'
      //'props' store data that can read only, can't change
      //'state' store data that can be change or mutable data
      var currentItems = this.state.items;

      //put new item to end of the array
      currentItems.push(this.state.newItemText);

      //'setState' is function of the class react,
      //call when you want to change the state of your application, text or object with the properties
      //when you pass it here, it would be your properties of your state,
      //and data will be update automatically
      //clear data in 'newItemText', to make textBox clear
      this.setState({items: currentItems, newItemText: ''});
    },
    render: function() {
      return (
        <div>
            <h3>{this.props.title}</h3>
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.onChange} value={this.state.newItemText} />
                <button>Add</button>
            </form>
            <List items={this.state.items} />
        </div>
      );
    }
});

module.exports = ListManager;
