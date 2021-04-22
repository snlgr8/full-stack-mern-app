import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';

import { makeStyles, fade } from '@material-ui/core/styles';
export const ToolbarContainer = styled(Toolbar)`
  background-color: #daf1ed;
  // justify-content: center;
  height: 65px;
  min-height: 20px;
  display: 'flex';
  // justify-content: flex-end;
`;

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  icon: {
    //marginLeft: '15px',
    height: '65px',
    width: '60px',
    marginTop: '12px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1',
    padding: '10px',
  },
  userName: {
    display: 'flex',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: '#05b79c',
    backgroundColor: 'black',
  },

  logout: {
    cursor: 'pointer',
    marginLeft: '15px',
    // color: 'white',
  },
  options: {
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '10px',
    // color: 'white',
    '&:hover': {
      color: 'black',
    },
  },
  endContent: {
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  search: {
    position: 'relative',
    // border: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#57c1af', 0.4),
    '&:hover': {
      backgroundColor: fade('#308275', 0.4),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    border: 'none',
    marginTop: '5px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
