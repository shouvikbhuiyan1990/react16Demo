import React, { Component } from 'react';

class CustomAttributes extends Component {

    /* 
        * React 16 supports custom attributes
        * React 15 ignores custom attributes and returns only an empty <div />
    */

   render() {
    return (
        <div myCustomAttribute="1">Check DOM</div>
        /*
           * React v15 output - <div />
           * React v16 output - <div myCustomAttribute="1" />
        */
    )
  }
}

export default CustomAttributes;