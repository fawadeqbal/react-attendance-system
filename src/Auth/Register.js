import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "100%",
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
  },
});

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement registration logic here
  };

  return (
    <div className={classes.root}>
      <h1>Register</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          className={classes.input}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          className={classes.input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className={classes.input}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" className={classes.button}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
