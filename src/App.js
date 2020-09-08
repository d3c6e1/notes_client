import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import About from './pages/About';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newnote" component={NewNote} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
