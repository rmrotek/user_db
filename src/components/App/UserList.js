import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem';


import { List } from '@material-ui/core';

let UserList = ({ users, loading }) => {
  
  let usersList = '';
  if (users) {
    
    usersList = users.map((user, id) => (
      <List key={`${id}`} style={{background: 'lightgrey'}}>
        <UserItem user={user} />
      </List>
      
    ))
  }
  if (loading) {
    usersList = <h3 className="loading-indicator">Loading ...</h3>
  }
  return (
    <div>
      {usersList}
    </div>
  )
}
const mapStateToProps = (state) => ({
  users: state.usersData.users,
  loading: state.usersData.loading
})

const mapDispatchToProps = {
  //for later
};

UserList = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default UserList;