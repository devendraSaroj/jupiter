import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Navbar from "./components/layouts/Navbar"
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Notification1 from './components/layouts/notification/Notification1';
import Task1 from './components/layouts/task/Task1';
import Task2 from './components/layouts/task/Task2';

function App() {
  return (
    
      <React.Fragment>
        <BrowserRouter>
        <Navbar />
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/create" component={CreateProject} />
          <Route path="/notification" component={Notification1} />
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={Task2} />
        </Switch>
        </BrowserRouter>
        </React.Fragment>
          // </BrowserRouter>
  );
}

export default App;
