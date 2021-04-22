import {
  AppBar,
  Avatar,
  Button,
  InputBase,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { logoutUser } from '../../redux/user/user.actions';
import { menu } from '../../utils/navigation-menu.data';
import useStyles, { ToolbarContainer } from './Navbar.styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const dispatch = useDispatch();
  const location = useLocation();

  const history = useHistory();
  const logout = () => {
    dispatch(logoutUser(history));
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  return (
    <AppBar position='relative'>
      <ToolbarContainer>
        <div className={classes.startContent}>
          <img
            src='./icon_final.png'
            alt='icon_image'
            className={classes.icon}
          />
        </div>

        {user && (
          <div className={classes.profile}>
            {menu.map((data) => (
              <Link className={classes.options} to={data.link} key={data.id}>
                {data.component}
              </Link>
            ))}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.endContent}>
              <Avatar className={classes.purple}>
                {user.data?.name.charAt(0).toUpperCase()}
              </Avatar>
              <Button
                className={classes.logout}
                onClick={logout}
                endIcon={<ExitToAppIcon />}
              >
                Logout
              </Button>
            </div>
          </div>
        )}
      </ToolbarContainer>
    </AppBar>
  );
};
