import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import bg3 from "../images/Bg3.png";
import bg2 from "../images/bg 2.png";
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
    height: "130vh", // Set the height to occupy the full viewport height
    width: "100%",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      height: "40vh",
    },
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: "-13vw",
    width: "130%",
    height: "100%",
    zIndex: -1,
    "@media (max-width: 600px)": {
      height: "50vh",
    },
  },
  imageContainer: {
    position: "absolute",
    bottom: "15vw",
    right: "5vw",
    width: "60vw",
    height: "30vw",
    borderRadius: "5vw",
    objectFit: "cover",
    zIndex: -1,
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
    paddingTop: "10vh",
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
    marginTop: "16vh",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vw",
      marginTop: "6vh",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5vw",
      marginTop: "5vh",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.LandingPane}>
        <img alt="Background" src={bg3} className={classes.bgImage} />
        <img alt="Interns" src={bg2} className={classes.imageContainer} />
        <div className={classes.textContainer}>
          <Box fontFamily="">
            <Typography align="center">
              <Grid xs="12">
                <Typography
                  style={{ fontSize: "3vw", fontWeight: 600, color: "black" }}
                >
                  NAVIGATE YOUR{" "}
                  <span style={{ color: "#ff7704" }}>CAREER ODYSSEY:</span>{" "}
                  <br />
                  FROM INTERNSHIP
                  <span style={{ color: "#ff7704" }}> TO FUTURE SUCCESS</span>
                  <br />
                  <Grid item xs={4} style={{ textAlign: "left" }}>
                    <Typography
                      className={classes.text}
                      style={{ fontWeight: 600 }}
                    >
                      Learning{" "}
                      <span
                        style={{
                          WebkitTextStroke: "1px #000000",
                          color: "transparent",
                          fontSize: "4vw",
                        }}
                      >
                        Growing.
                      </span>{" "}
                      <span style={{ color: "#ff7704" }}>
                        {" "}
                        Making an impact:
                      </span>
                      <br /> Explore the journeys of those who dared <br />
                      to bridge the gap between <br />
                      theory and reality.
                    </Typography>
                  </Grid>
                </Typography>
              </Grid>
            </Typography>
          </Box>

          <img alt="Wave" src={WAVE} className={classes.WAVE} />
        </div>
      </div>
      <div className={classes.primaryPanel}>
        <Typography align="center">
          <Box fontFamily={"poppins"} fontSize={"5vw"} fontWeight={800}>
            BATCH 6
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
