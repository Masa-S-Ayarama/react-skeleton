var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    //Define and initialize Properties of object,
    //every react in component will call this funtion just once when loaded
    getInitialState: function() {
      return {items: [], newItemText: ''};
    },
    //
    onChange: function(e) {
      //Update the state property every time a keystroke is typed
      this.setState({newItemText: e.target.value});
    },
    //function call when button was pressed, 'e' = element
    handleSubmit: function(e) {
      //make event not occur on click button itself or on accident, but occur on html form submit function
      //stop the button from getting clicks since we are using form onSubmit
      e.preventDefault();

      //each component has 'props' and 'state'
      //'props' store data that can read only, can't change
      //'state' store data that can be change or mutable data
      //Grab the current list of items
      var currentItems = this.state.items;

      //put new item to end of the array
      currentItems.push(this.state.newItemText);

      //'setState' is function of the class react,
      //call when you want to change the state of your application, text or object with the properties
      //when you pass it here, it would be your properties of your state,
      //and data will be update automatically
      //after pressed button, add data to 'items',
      //and clear data in 'newItemText', to make textBox clear
      //Update the main item list with the new list and clear the newItemText
      this.setState({items: currentItems, newItemText: ''});
    },
    render: function() {
      //onChange is called with every keystroke so we can strore the most recent data entered
      //value is what the user sees in the input box - we point this to newItemText so it update on every

      var divStyle = {
        marginTop: 10
      };
      var headingStyle = {

      };

      //If pass in headingColor then do something
      if (this.props.headingColor) {
          headingStyle.background = this.props.headingColor;
      }

      return (
        //'className' is bootstrap property allows to set css class to actual element
        //not using 'class' cause it maybe confuse with jsx react's class
        //but it can use 'class' keyword as normal on html file,
        //but on .jsx file must use 'className'
        <div style={divStyle} className="col-sm-4">
            <div className="panel panel-primary">
                <div style={headingStyle} className="panel-heading">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="row panel-body">
                    Please input ingredients:
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-sm-9">
                            <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
                <List items={this.state.items} />
            </div>
        </div>
      );
    }
});

module.exports = ListManager;
