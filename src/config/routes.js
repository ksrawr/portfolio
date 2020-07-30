import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './../components/Home';
import About from './../components/About';
import Contact from './../components/Contact';

const Routes = props => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  )
}

export default Routes;