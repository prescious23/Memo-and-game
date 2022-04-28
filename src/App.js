import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/index.';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Memo from './pages/Memo';
import Games from './pages/Games';


function App() {
  return (
    <Router>
      <Navbar/>
       <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Memo" component={Memo}/>
          <Route exact path="/Games" component= {Games}/>
        </Switch>
      </Router>
  );
}

export default App;