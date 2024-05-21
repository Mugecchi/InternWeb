import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { template } from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1200,
    height: 600,
    backgroundColor: "#d6d6d6",
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: "auto",
    display: "inherit",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Testimonial({ Team = {} }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={Team.src} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {Team.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Sample Testimony
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  sample qoute
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  sample
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
