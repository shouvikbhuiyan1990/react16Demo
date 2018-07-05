import React, { Component,Fragment } from 'react';

class App extends Component {

    /* 
        * Method 1, returning Array
        * Make sure to put strings within double quotes
        * separated by comma
        * must have a key attribute
        * Not consistent authoring experience for JSX
    */

   render() {
    return [
        "Some text.",
        <h2 key="heading-1">A heading</h2>,
        "More text.",
        <h2 key="heading-2">Another heading</h2>,
        "Even more text."
    ];
  }

    /* 
        * Method 2
        * introduced in react 16.2
        * Fragment is a first-class component available in React core library
    */

//   render() {
//     return (
//         <Fragment>
//             Some text.
//             <h2>A heading</h2>
//             More text.
//             <h2>Another heading</h2>
//             Even more text.
//         </Fragment>
//     )
//   }
  
    /* 
        * Method 3
        * introduced in react 16.2
        * lacks jsx build tool support
        * available from babel 7.beta
    */

//   render() {
//     return (
//         <>
//             Some text.
//             <h2>A heading</h2>
//             More text.
//             <h2>Another heading</h2>
//             Even more text.
//         </>
//     )
//   }

}

export default App;
