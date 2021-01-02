import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




import Team from './components/Teams';
import Notfound from './components/Nofound';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import SingleTeam from './components/SingleTeam';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/schedule`} component={Schedule}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/team/:id`} component={SingleTeam}></Route>
          <Route path="*" component={Notfound}></Route>
        </Switch>
        <Footer/>
      </Router>







    </div>
  );
}

export default App;
