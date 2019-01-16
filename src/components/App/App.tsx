import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserListView from '../UserListView/UserListView';

import UserView from '../UserView/UserView';

import { connect } from 'react-redux'
import AddUserForm from '../AddUserForm/AddUserForm';
import EditUserForm from '../EditUserForm/EditUserForm';
import { fetchUsers } from "../../services";
import NavBar from '../NavBar/NavBar';
import { Typography } from '@material-ui/core';

type TProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
class App extends Component<TProps> {

  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Typography paragraph></Typography>
          
            <Route exact path="/" component={UserListView} />
            <Route exact path="/users/:userId" component={UserView} />
            <Route path="/users/:userId/edit" component={EditUserForm} />
            <Route path="/addUser" component={AddUserForm} />
          

        </div>
      </Router>
    );
  }
}

const mapStateToProps = () => ({
  //for later
})

const mapDispatchToProps = {
  fetchUsers
};

const Connectable = connect(mapStateToProps, mapDispatchToProps)

export default Connectable(App);
