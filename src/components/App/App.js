import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import UserListView from './UserListView';

import UserView from './UserView';

import { connect } from 'react-redux'
import AddUserForm from './AddUserForm';


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          
          <Route exact path="/" component={UserListView} />
          <Route path="/users/:userId" component={UserView} />
          <Route path="/addUser" component={AddUserForm} />
        </div>


      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  //for later
})

const mapDispatchToProps = {
  
};

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
