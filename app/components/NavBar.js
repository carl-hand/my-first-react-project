/**
 * Created by carl.hand on 23/03/2017.
 */
import React from 'react';

var NavBar = React.createClass({
   handleChange: function(e) {
       var newName = e.target.value;
       this.props.onChange(newName);
   },
    
    render: function() {
        return (
            <div>
                <button value="Aliens" onClick={this.handleChange}>Aliens</button>
                <button value="Predator" onClick={this.handleChange}>Predator</button>
                <button value={this.props.default} onClick={this.handleChange}>Reset</button>
            </div>
        );
    }
});

export default NavBar;