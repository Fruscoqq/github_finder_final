import React, { Fragment } from 'react';
import Navbar from './componenets/Layout/Navbar';
import Users from './componenets/User/Users';
import User from './componenets/User/User';
import Search from './componenets/User/Search';
import Alert from './componenets/Layout/Alert';
import Spinner from './componenets/Layout/Spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubState from './Context/Github/GithubState';
import AlertState from './Context/Alert/AlertState';


const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search />
                    <Spinner />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path='/User/:login' render={props => (
                  <User {...props} />
                )} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
