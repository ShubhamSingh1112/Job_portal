import React from "react";
import './App.css';



import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Forgotpassword } from './pages/Forgotpassword';
import { Postjob } from './pages/recriuter/Postjob';
import { Postedjobs } from './pages/recriuter/Postedjobs';

import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Forgotpassword" component={Forgotpassword} />
          <Route path="/recruiter/Postjob" component={Postjob} />
          <Route path="/recruiter/Postedjobs" component={Postedjobs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
