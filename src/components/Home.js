import React from "react";
import { Box, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import bg from "../images/bg 2.png";
import overlay from "../images/overlay.png";
import WAVE from "../images/WAVE.svg";
import InternData from "./Teams/Testimonials/InternData";
import Slider from "./InternTeam/Accordion";
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
    left: "-0.1vw",
    width: "110vw",
    height: "100vh",
    zIndex: -1,
    opacity: 0.5,
  },
  textContainer: {
    zIndex: 20,
    marginTop: "30vh",
    fontFamily: "Poppins",
    fontSize: 40,
  },
  WAVE: {
    position: "absolute",
    bottom: "-50vh",
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
  },
  primaryPanel: {
    position: "relative",
    background: "#ffffff",
    padding: "10vh 0vh",
  },
  secondaryPanel: {
    position: "relative",
    background: "#011c25",
    padding: "10vh 0vh",
  },
}));

const Home = () => {
  const classes = useStyles();

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  let fontSize = "3rem";
  if (isSmallScreen) {
    fontSize = "1.5rem";
  } else if (isMediumScreen) {
    fontSize = "2rem";
  }
  return (
    <div className={classes.root}>
      <div className={classes.LandingPane}>
        <img alt="Background" src={bg} className={classes.bgImage} />
        <div className={classes.textContainer}>
          <Box fontFamily="Poppins">
            <Typography align="center" variant="h3" style={{ fontSize }}>
              <h3>Chart your Career Course:</h3>
              <h3>Your INTERNSHIP, Your FUTURE</h3>
            </Typography>
          </Box>
          <img
            alt="Overlay Background"
            src={overlay}
            className={classes.overlayImage}
          />
          <img alt="Wave" src={WAVE} className={classes.WAVE} />
        </div>
      </div>
      <div className={classes.primaryPanel}>
        <Typography align="center">
          <Box fontFamily={"poppins"} fontSize={"4rem"} fontWeight={800}>
            TEAMS
          </Box>
        </Typography>
        <Slider />
      </div>

      <div className={classes.secondaryPanel}>
        <InternData />
      </div>
    </div>
  );
};

export default Home;
