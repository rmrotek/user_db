import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { Typography, Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CachedIcon from '@material-ui/icons/Cached'

import { fetchUsers } from "../../services";

const CustomLink = (props: any) => <Link to={`/addUser`} {...props} />

type TProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

let NavBar = ({ fetchUsers }: TProps) => {
  return (
      <AppBar position="static"  >
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            User List APP
          </Typography>
          <div>
            <Button component={CustomLink} variant='contained' style={{ marginRight: 20 }} >Add New User</Button>
            <Button onClick={() => fetchUsers()} variant='contained' > <CachedIcon/></Button>
          </div>
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = () => ({
  //for later
})

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

