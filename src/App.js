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
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/schedule" component={Schedule}></Route>
          <Route exact path="/team" component={Team}></Route>
          <Route exact path="/team/:id" component={SingleTeam}></Route>
          <Route path="*" component={Notfound}></Route>
        </Switch>
        <Footer/>
      </Router>







    </div>
  );
}

export default App;
