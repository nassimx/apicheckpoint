import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Button, CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const UserDetail = ({ match }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);
  if (loading) {
    return <div className={classes.root}>
      <CircularProgress disableShrink />
    </div>;
  }
  return (
    <div>


      <Card className={classes.root}>
        <CardActionArea>

          <h1 className="name">{user.name[0]}</h1>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Username : {user.username}</p>
              <p>Email : {user.email}</p>
              <p>Street : {user.address.street}</p>
              <p>City : {user.address.city}</p>
              <p>Zipcode : {user.address.zipcode}</p>
              <p>Phone : {user.phone}</p>
              <p>Website : {user.website}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">

            <Button size="small" variant="contained" color="primary">Go Back</Button>


          </Link>
        </CardActions >
      </Card>


    </div>
  );
};

export default UserDetail;
