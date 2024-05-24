import React from "react";
import { Box, makeStyles, Grid } from "@material-ui/core";
import bg from "../images/bg 2.png";
import overlay from "../images/overlay.png";
import WAVE from "../images/WAVE.svg";
import InternData from "./Teams/Testimonials/InternData";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  LandingPane: {
    textAlign: "center",
    color: "white",
    position: "relative", // Changed from "absolute" to "relative"
    height: "100vh", // Set the height to occupy the full viewport height
    width: "100%",
    overflow: "hidden",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  overlayImage: {
    position: "absolute",
    top: 0,
    left: -10,
    width: "100.8%",
    height: "100%",
    zIndex: -1,
    opacity: 0.5,
  },
  textContainer: {
    zIndex: 20,
    marginTop: "16rem",
    fontFamily: "Poppins",
    fontSize: 40,
  },
  WAVE: {
    position: "absolute",
    bottom: -300,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  secondaryPanel: {
    position: "relative",
    background: "#011c25",
    padding: "50px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.LandingPane}>
        <img alt="Background" src={bg} className={classes.bgImage} />
        <div className={classes.textContainer}>
          <Box fontFamily={"Roboto"} lineHeight={0.5}>
            <h3>Chart your Career Course:</h3>
            <h2>Your INTERNSHIP, Your FUTURE</h2>
          </Box>
          <img
            alt="Overlay Background"
            src={overlay}
            className={classes.overlayImage}
          />
          <img alt="Wave" src={WAVE} className={classes.WAVE} />
        </div>
      </div>
      <Grid className={classes.secondaryPanel} container direction="row">
        <Grid item xs={12}>
          <InternData />
        </Grid>
      </Grid>
      <div className="container"></div>
    </div>
  );
};

export default Home;
