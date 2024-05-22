import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, useMediaQuery, useTheme } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    maxWidth: 1400,
    height: 650,
    backgroundColor: "#d6d6d6",
    borderRadius: "50px",
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: "auto",
    display: "inherit",
    width: theme.spacing(30),
    height: theme.spacing(30),
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Testimonial({ Team = {} }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.image}>
              <Avatar className={classes.img} alt="complex" src={Team.src} />
            </div>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={isMobile ? 12 : 9}>
                <Box>
                  <Typography gutterBottom variant="subtitle1">
                    {Team.Name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {Team.Qoute}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {Team.Testimony}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant="body">{Team.Body}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <i class="fa-solid fa-quote-right fa-2xl fa-fade" />
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Paper>
    </div>
  );
}
