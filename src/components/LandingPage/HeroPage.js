import React from "react";
import { Box,makeStyles,Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4),
  },
  logo: {
    width: "20vw",
    height: "20vw",
  },
  heading: {
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  highlight: {
    color: "#FF6600",
  },
  underline: {
    textDecoration: "underline",
  },
  subheading: {
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
  },
  circled: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "-10%",
      right: "-10%",
      width: "120%",
      height: "120%",
      border: "2px solid black",
      borderRadius: "50%",
    },
  },
  description: {
    marginTop: theme.spacing(2),
    fontSize: "1rem",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  bold: {
    fontWeight: "bold",
  },
}));

const CareerOdyssey = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <Typography variant="h4" className={classes.heading}>
        NAVIGATE YOUR{" "}
        <span className={classes.highlight}>CAREER ODYSSEY: </span>
      </Typography>
      <Typography variant="h4" className={classes.heading}>
        FROM INTERNSHIP{" "}
        <span className={`${classes.highlight} ${classes.circled}`}>
          TO FUTURE SUCCESS
        </span>
      </Typography>
      <Typography variant="body1" className={classes.description}>
        Learning, <span className={classes.bold}>Growing</span>, Making an
        impact: Explore the journeys of those who dared to bridge the gap
        between theory and reality.
      </Typography>
    </Box>
  );
};

export default CareerOdyssey;
