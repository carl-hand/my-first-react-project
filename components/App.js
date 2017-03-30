/**
 * Created by carl.hand on 29/03/2017.
 */
import React from 'react'

var App = React.createClass({
    render: function () {
        var defaultTitle = (this.props.defaultTitle)
            ? "No Movie Selected"
            : (this.props.title) + " is about to begin";
        return (
            <div>
                <p>{defaultTitle}</p>
            </div>
        );
    }
});

export default App;