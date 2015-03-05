/** @jsx React.DOM */

// tips
// Remember that you can use setState to change the values of the properties/atributes of your components inside events for example

var Counter = React.createClass({
  incrementCount: function(){
    // Do something!
  },
  getInitialState: function(){
     return {
       // Set your initial values
     }
  },
  render: function(){
    //Render your elements in to the DOM
  }
});

React.renderComponent(<Counter/>, document.getElementById('mount'));