import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home'
import About from '../about'
import Fragments from '../demos/fragments';
import CustomAttributes from '../demos/customAttributes';
import Portals from '../demos/portals';
import Lifecycles from '../demos/lifeCycle';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/fragments" component={Fragments} />
      <Route exact path="/custom-attr" component={CustomAttributes} />
      <Route exact path="/portals" component={Portals} />
      <Route exact path="/lifecycles" component={Lifecycles} />
    </main>
  </div>
)

export default App;