import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home'
import About from '../about'
import Fragments from '../demos/fragments';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/fragments" component={Fragments} />
    </main>
  </div>
)

export default App;