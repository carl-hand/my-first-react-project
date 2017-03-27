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
                <button value="Aliens" onChange={this.handleChange}>Aliens</button>
            </div>
        );
    }
});

export default NavBar;