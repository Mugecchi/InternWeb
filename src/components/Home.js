import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import bg from "../images/bg 2.png";
import overlay from "../images/overlay.png";
import WAVE from "../images/WAVE.svg";
import InternData from "./Teams/Testimonials/InternData";
import Slider from "./InternTeam/Accordion";
import YoutubePlayer from "./VideoStream/youtube";
import Faqs from "./Faqs";
import ContactUs from "./ContactUs";

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
    "@media (max-width: 600px)": {
      height: "50vh",
    },
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: "-20vw",
    width: "140%",
    height: "auto",
    zIndex: -1,
    "@media (max-width: 600px)": {
      height: "50vh",
    },
  },
  overlayImage: {
    position: "absolute",
    top: 0,
    left: "-2vw",
    width: "120vw",
    height: "100vh",
    zIndex: -1,
    opacity: 1,
  },
  textContainer: {
    paddingTop: "20vh",
    paddingLeft: "2vw",
    paddingRight: "2vw",
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
  // searchBar: {
  //   background: "white",
  //   maxWidth: "30vw",
  //   maxHeight: "7vh",
  //   fontSize: "0.5vw",
  //   width: "60vw",
  //   height: "10vh",
  //   borderRadius: theme.spacing(2, 0, 0, 2),
  //   "& .MuiOutlinedInput-root": {
  //     borderRadius: theme.spacing(2, 0, 0, 2),
  //     fontSize: "0.5vw",
  //     height: "100%",
  //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //       borderWidth: "2px",
  //       fontSize: "0.5vw",
  //       borderRadius: theme.spacing(2, 0, 0, 2), // Change border radius when focused
  //     },
  //   },
  // },
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
}));

const Home = () => {
  const OutlineText = ({ children, fontSize, fontWeight }) => (
    <Typography
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: 1,
        color: "white",
      }}
    >
      {children}
    </Typography>
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.LandingPane}>
        <img alt="Background" src={bg} className={classes.bgImage} />
        <div className={classes.textContainer}>
          <Box fontFamily="">
            <Typography align="center">
              <OutlineText fontSize="4vw" fontWeight={600}>
                CHART YOUR CAREER COURSE:
                <br /> YOUR INTERNSHIP, YOUR FUTURE
              </OutlineText>
              <br />
              <OutlineText fontSize="3vw" fontWeight={300}>
                Learning. Growing. Making an impact:
                <br /> Explore the journeys of those who dared to bridge
                <br /> the gap between theory and reality.
              </OutlineText>
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
          <Box fontFamily={"poppins"} fontSize={"5vw"} fontWeight={800}>
            TEAMS
          </Box>
        </Typography>
        <Slider />
      </div>

      <div className={classes.secondaryPanel}>
        <InternData />
      </div>
      <div className={classes.primaryPanel}>
        <YoutubePlayer />
      </div>
      <div className={classes.primaryPanel}>
        <Faqs />
      </div>
      <div className={classes.primaryPanel}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
