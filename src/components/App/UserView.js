import React from 'react';

import { connect } from 'react-redux'


// const userId = this.props.match.params.userId;
let UserView = ({ user }) => (

   <>
    userview
   </>

);

const mapStateToProps = (state) => ({
  users: state.usersData.users,
  loading: state.usersData.loading
})

const mapDispatchToProps = {
  //for later
};

UserView = connect(mapStateToProps, mapDispatchToProps)(UserView)

export default UserView;