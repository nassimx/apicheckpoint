import React, { useEffect, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));
const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [err, setErr] = useState()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // .catch(err => setErr(err))
  }, []);
  if (loading) {
    return <div className={classes.root}>
      <CircularProgress disableShrink />
    </div>;
  }
  return (

    <div className="cardlist">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}

    </div>
  );
};

export default UserList;
