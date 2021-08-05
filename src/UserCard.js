import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 200,
  },
});


const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 20 }}>
      <Card className={classes.root}>
        <CardActionArea>

          <h1 className="name">{user.name[0]}</h1>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/${user.id}`}>

            <Button size="small" color="primary">
              View
            </Button>
          </Link>

        </CardActions>
      </Card>
    </div>
  )
}

export default UserCard
