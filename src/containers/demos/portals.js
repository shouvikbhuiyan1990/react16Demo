import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Child extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        /*
            ReactDOM.createPortal(
             valid react child, DOM node
            );
        */
        return ReactDOM.createPortal(
            this.props.children, 
            this.el
        );
    }
}

class Portals extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This will fire when the button in Child is clicked,
        // updating Parent's state, even though button
        // is not direct descendant in the DOM. 
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }
   render() {
    return (
        <div onClick={this.handleClick}>
            <p>Number of clicks: {this.state.clicks}</p>
            <p>
            Open up the browser DevTools
            to observe that the button
            is not a child of the div
            with the onClick handler.
            </p>
            <Child>
                <button>Click</button>
            </Child>
        </div>
    )
  }
}

export default Portals;