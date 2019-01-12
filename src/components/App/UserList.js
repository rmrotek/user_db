import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem';

let UserList = ({ users, loading }) => {
  let usersList = '';
  if (users) {
    
    usersList = users.map((user, id) => (
      <div key={`${id}`} className='row'>
        <UserItem user={user} />
      </div>
      
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

UserList = connect(mapStateToProps, null)(UserList)

export default UserList;