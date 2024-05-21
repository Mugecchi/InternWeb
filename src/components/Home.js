import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import bg from "../images/bg 2.png";
import overlay from "../images/overlay.png";
import WAVE from "../images/WAVE.svg";

const useStyles = makeStyles({
  root: {
    height: "100",
    textAlign: "center",
    color: "white",
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
    overflowY: "hidden",
  },
  textContainer: {
    zIndex: "20",
    marginTop: "16rem",
    fontFamily: "poppins",
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
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
  );
}
