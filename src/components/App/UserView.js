import React from 'react';

import { connect } from 'react-redux'



let UserView = ({ users, match}) => {
  const userId = parseInt(match.params.userId);
  const user = users && users.find(user => user.id === userId)
  
    if(user){
      return (
        <div>
          {user.name}
        </div>
      )
    }
    return (
      <div>
        loading
      </div>
    )

  


};

const mapStateToProps = (state) => ({
  users: state.usersData.users,
  
})

const mapDispatchToProps = {
  //
};

UserView = connect(mapStateToProps, mapDispatchToProps)(UserView)

export default UserView;

