/**
 * Created by carl.hand on 23/03/2017.
 */
import React from 'react';

var App = React.createClass({
   render: function () {
       var name = this.props.name;
       return (
         <h1>{name}</h1>
       );
   } 
});

export default App;
