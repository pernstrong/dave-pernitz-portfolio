import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import About from '../About/About'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import WorkEducation from '../WorkEducation/WorkEducation'

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/about" render={() => <About /> } />
          <Route path="/projects" render={() => <Projects /> } />
          <Route path="/workeducation" render={() => <WorkEducation /> } />
          <Route path="/contact" render={() => <Contact /> } />
          <Route exact path="/" render={() => <Home /> } />
        </Switch>
      </main>
    </>
  );
}

export default App;
