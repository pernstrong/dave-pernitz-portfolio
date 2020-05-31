import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import About from '../About/About'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import WorkEducation from '../WorkEducation/WorkEducation'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-168111706-1')
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {




  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/dave-pernitz-portfolio/about" render={() => <About /> } />
          <Route path="/dave-pernitz-portfolio/projects" render={() => <Projects /> } />
          <Route path="/dave-pernitz-portfolio/workeducation" render={() => <WorkEducation /> } />
          <Route path="/dave-pernitz-portfolio/contact" render={() => <Contact /> } />
          <Route exact path="/dave-pernitz-portfolio" render={() => <Home /> } />
        </Switch>
      </main>
    </>
  );
}

export default App;
