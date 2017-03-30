/**
 * Created by carl.hand on 29/03/2017.
 */
import React from "react"

var Button = React.createClass({
    changeName: function (e) {
        var newTitle = e.target.value;
        this.props.onChange(newTitle);
    },

    render: function () {
        return (
            <div>
                <h1>Pick A Movie</h1>
                <button value="Rambo" onClick={this.changeName}>Rambo</button>
                <button value="Conan" onClick={this.changeName}>Conan</button>
                <button value="Batman" onClick={this.changeName}>Batman</button>
            </div>
        );
    }
});


Button.PropTypes = {
    onChange: React.PropTypes.func.isRequired
};

export default Button;