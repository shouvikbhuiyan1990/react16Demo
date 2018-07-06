import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home'
import About from '../about'
import Fragments from '../demos/fragments';
import CustomAttributes from '../demos/customAttributes';
import Portals from '../demos/portals';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/fragments" component={Fragments} />
      <Route exact path="/custom-attr" component={CustomAttributes} />
      <Route exact path="/portals" component={Portals} />
    </main>
  </div>
)

export default App;