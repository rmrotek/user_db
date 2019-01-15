import React from 'react'
import { connect } from 'react-redux'
import UserItem from '../UserItem/UserItem';
import { List } from '@material-ui/core';

import {IUsers} from '../../store/reducers/users'

let UserList = ({ users }: any) => {
  
  let usersList;
  if (users) {
    
    usersList = users.map((user: IUsers, id: number) => (
      <List key={`${id}`} style={{background: 'lightgrey'}}>
        <UserItem user={user} />
      </List>
      
    ))
  } else {
    usersList = <h3 className="loading-indicator">Loading ...</h3>
  }
  return (
    <div>
      {usersList}
    </div>
  )
}
const mapStateToProps = (state: any) => ({
  users: state.usersData.users  
})

const mapDispatchToProps = {
  //for later
};



export default connect(mapStateToProps, mapDispatchToProps)(UserList);