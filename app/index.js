/**
 * Created by carl.hand on 22/03/2017.
 */
import React from 'react';
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import App from './components/App';
import NavBar from './components/NavBar';
import ReactDOM from 'react-dom';
// import reducer from './reducers'

var MyComponent = React.createClass({

    getInitialState: function () {
       return ({
           title: 'Heading'
       });
    },

    changeName: function(newTitle) {
        this.setState({
            title: newTitle
        });
    },

    render: function () {
        return (
            <div>
                <App name={this.state.title} />
                <NavBar onChange={this.changeName} />
            </div>
        );
    }
});

ReactDOM.render(<MyComponent />,
document.getElementById('app'));