import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "8px",
  },
  media: {
    height: 140,
  },
});

export default function Post() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DEMO
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            rerum iusto qui necessitatibus, ex repellat dolores quis, minus
            omnis distinctio, repellendus maxime magnam voluptate atque eum
            minima alias sed saepe.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
