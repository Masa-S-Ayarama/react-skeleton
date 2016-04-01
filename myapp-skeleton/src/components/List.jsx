var React = require('react');
var ListItem = require('./ListItem.jsx');
var shoppingitems = [{"id":1,"text":"rice"}, {"id":2,"text":"apple"}, {"id":3,"text":"milk"}, {"id":4,"text":"pants"}, {"id":5,"text":"cake"}];

var List = React.createClass({
    render: function() {
      var listItems = shoppingitems.map(function(item) {
        return <ListItem key={item.id} shoppingitem={item.text} />;
      });
      return (<ol>{listItems}</ol>);
    }
});

module.exports = List;
