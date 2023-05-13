import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Logout() {
  const classes = useStyles();

  const handleLogout = () => {
    // handle logout logic
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
