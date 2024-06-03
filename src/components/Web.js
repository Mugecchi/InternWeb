import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import InternData from "./Teams/Testimonials/InternData";
import Slider from "./InternTeam/Accordion";
import Faqs from "./Faqs/Faqs";
import HeroPage from "./LandingPage/HeroPage";
import Message from "./Message/Messagees";
import Gallery from "./Gallery/Gallery";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
  },
  LandingPane: {
    display: "flex",
    textAlign: "center",
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: "-13vw",
    height: "100%",
    zIndex: -1,
    "@media (max-width: 600px)": {
      height: "50vh",
    },
  },
  imageContainer: {
    position: "absolute",
    bottom: "20vw",
    right: "10vw",
    width: "80vw",
    height: "40vw",
    objectFit: "cover",
    zIndex: 1,
  },
  overlayImage: {
    position: "absolute",
    top: 0,
    left: "-2vw",
    width: "120vw",
    height: "100vh",
    zIndex: 1,
    opacity: 0,
  },
  textContainer: {
    paddingTop: "1vh",
    paddingLeft: "2vw",
    paddingRight: "2vw",
  },

  WAVE: {
    position: "absolute",
    bottom: "-50vh",
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1,
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

  inputLabel: {
    color: "#bcbcbc",
    fontSize: "0.5vw",
    fontWeight: "bold",
    "&.Mui-focused": {
      fontSize: "0.5vw",
      fontWeight: "bold",
    },
  },
  buttonMod: {
    borderRadius: theme.spacing(0, 1, 1, 0),
    height: "7.2vh",
  },
  text: {
    fontSize: "2.5vw",
    marginTop: "80vh",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vw",
      marginTop: "80vh",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5vw",
      marginTop: "22vh",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.LandingPane}>
        <HeroPage />
      </div>
      <div className={classes.primaryPanel}>
        <Typography align="center">
          <Box fontFamily={"poppins"} fontSize={"5vw"} fontWeight={800}>
            RADZTECH <span style={{ color: "#ff7704" }}>INTERNS</span>
          </Box>
        </Typography>
        <Slider />
      </div>

      <div className={classes.secondaryPanel}>
        <InternData />
      </div>
      <div className={classes.primaryPanel}>
        <Message />
      </div>
      <div className={classes.primaryPanel}>
        <Gallery />
      </div>
      <div className={classes.primaryPanel}>
        <Faqs />
      </div>
      <div className={classes.primaryPanel}></div>
    </div>
  );
};

export default Home;
