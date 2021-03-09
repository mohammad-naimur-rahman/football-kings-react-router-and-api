import React from 'react'
import './App.css';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Teams from './Components/Teams/Teams';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <div className='container-fluid' style={{ margin: 0, padding: 0 }}>
        <HeaderNav />
        <Switch>
          <Route exact path='/'>
            <Teams />
          </Route>
          <Route path='/home'>
            <Teams />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/team/:teamID'>
            <TeamDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
