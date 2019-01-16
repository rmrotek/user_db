import React from 'react'
import { connect } from 'react-redux'

import './UserList.css'

import { List } from '@material-ui/core';

import UserItem from '../UserItem/UserItem';

import { IUsers } from '../../store/reducers/users'

type TProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

let UserList = ({ users }: TProps) => {
  let usersList;
  if (users) {
    usersList = (
    <List className={'separator-top'}>
      {users.map((user: IUsers, id: number) => (
        <UserItem key={`${id}`} user={user} />
      ))}
    </List>
    )
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