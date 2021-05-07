import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '2px',
    padding: '10px',
    maxWidth: '95%',
  },
  btncontainer: {
    justifyContent: 'flex-end',
    display: 'flex',
    margin: '15px',
  },
  addBtn: {
    backgroundColor: '#DAF1ED',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '10px',
    '&:hover': {
      opacity: '0.8',
      backgroundColor: '#48c1a8',
    },
  },
}));
