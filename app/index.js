/**
 * Created by carl.hand on 29/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "../components/App";
import Button from "../components/Button";

var MyComponent = React.createClass({

    getInitialState: function() {
        return {
            title: "",
            defaultTitle: true
        }
    },

    handleChange: function(newTitle) {
        this.setState({
            title: newTitle,
            defaultTitle: false
        });
    },

    render: function() {
        return (
            <div>
                <Button onChange={this.handleChange} />
                <App title={this.state.title} defaultTitle={this.state.defaultTitle}/>
            </div>
        );
    }
});

ReactDOM.render(<MyComponent />, document.getElementById("app"));