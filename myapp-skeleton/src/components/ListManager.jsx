var React = require('react');
//var List = require('./List.jsx');

var ListManager = React.createClass({

    getInitialState: function() {
      return {items: [], newItemText: ''};
    },
    //call this on every keystroke, update newItemText automatically
    onChange: function(e) {
      this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
      //'items' is string array, newItemText is 'string'
      e.preventDefault();
      //copy existing data
      var currentItems = this.state.items;
      //add new data to last index of array
      currentItems.push(this.state.newItemText);
      //save data to 'items' property, clear data in 'newItemText'
      this.setState({items: currentItems, newItemText: ''});
    },
    render: function() {
      var mainBGColor = {
        background: "#E0E0E0"
      }
      var upperBoxStyle = {
        height: 200
      };
      var lowerBoxStyle = {
        height: 400
      };
      var backgroundStyle = { };



      if (this.props.backgroundColor) {
        backgroundStyle.background = this.props.backgroundColor;
      }

      return (
        //First row
        // <div style={mainBGColor} className="container">
        //   <h1>Your Shopping Store</h1>
        //   <h4>List for items to shopping</h4>
          //<div className="row">
            <div style={upperBoxStyle} className="col-sm-3">
              <div className="panel panel-default">
                <div style={backgroundStyle} className="panel-body">
                  <h4 className="text-center">{this.props.title}</h4>
                </div>
              </div>
            {/*</div>*/}
          {/*</div>*/}
            {/*<div className="row">
              <div style={lowerBoxStyle} className="col-sm-3">

                    <h4>{this.props.title}</h4>
              </div>
            </div>*/}
          </div>


        //Second row


      );
    }
});

module.exports = ListManager;
