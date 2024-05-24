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
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "100%",
    },
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
  bio: {
    fontWeight: "700",
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
          <div className={classes.root}>
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
                  <Grid
                    item
                    xs
                    style={{ marginLeft: "10px" }}
                    spacing={2}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={isMobile ? 8 : 5}
                      style={{ borderRight: "1px solid black" }}
                    >
                      <Box>
                        <Typography className={classes.bio}>
                          {`${item.FirstName}
                           ${item.LastName}`}
                        </Typography>
                        <Typography className={classes.bio}></Typography>
                        <Typography>{item.Course}</Typography>
                        <Typography variant="subtitle1">
                          {item.School}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={isMobile ? 8 : 5}>
                      <Box>
                        <Typography align="center" className={classes.bio}>
                          {item.Introduction}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <i class="fa-solid fa-quote-right fa-10x fa-fade" />
                </Grid>
                <Grid item xs={12} style={{ margin: "10px 30px 0 30px" }}>
                  <Typography variant="h5">{item.Body}</Typography>
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
