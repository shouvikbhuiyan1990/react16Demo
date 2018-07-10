import React from 'react';

class Lifecycles extends React.Component {

    /* 
        * Lifecyles
    */

   constructor(Props) {
       super(Props);
       this.state = {
           dummy : ''
       }
   }

   componentDidMount() {
    console.log('did mount');
   }

   componentWillMount() {
    console.log('will mount');
   }

   componentWillUpdate() {
    console.log('will update');
   }

   componentDidUpdate() {
    console.log('did update');
   }

   shouldComponentUpdate() {
    console.log('should update');
    return true;
   }

   componentWillReceiveProps() {
    console.log('will recieve props');

   }

   componentWillUnmount() {
    console.log('UNMOUNT');
   }

   componentDidCatch() {
    console.log('catch');
   }

   getSnapshotBeforeUpdate() {

    console.log('snapshot');
   }

   static getDerivedStateFromProps() {
       console.log('derived');
       return null;
   }

   render() {
    return 'check console / developer tool '
  }
}

export default Lifecycles;