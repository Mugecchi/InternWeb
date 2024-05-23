import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, useMediaQuery, useTheme } from "@material-ui/core";
const QouteTypo = withStyles({
  root: {
    color: "#ff7704",
  },
})(Typography);
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

export default function Testimonial({ Team = [] }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const key = Object.values(Team);
  console.log(key);
  return (
    <div className={classes.root}>
      {Team.map((item, index) => {
        return (
          <div>
            <Paper className={classes.paper} elevation={10}>
              <Grid container spacing={2}>
                <Grid item>
                  <div className={classes.image}>
                    <Avatar
                      className={classes.img}
                      alt="complex"
                      src={item.src}
                    />
                  </div>
                </Grid>
                <Grid item xs={isMobile ? 12 : 3} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid
                      item
                      xs={isMobile ? 8 : 12}
                      style={{ backgroundColor: "green" }}
                    >
                      <Box>
                        <Typography gutterBottom variant="h1">
                          {item.Name}
                        </Typography>
                        <Typography gutterBottom variant="h3">
                          {item.Age}
                        </Typography>
                        <Typography gutterBottom variant="h3">
                          {item.Course}
                        </Typography>
                        <Typography gutterBottom variant="h3">
                          {item.DoB}
                        </Typography>
                        <QouteTypo variant="h2" gutterBottom>
                          {item.Qoute}
                        </QouteTypo>
                        <Typography variant="h2">{item.Testimony}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <i class="fa-solid fa-quote-right fa-10x fa-fade" />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h2">{item.Body}</Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Paper>
          </div>
        );
      })}
    </div>
  );
}
