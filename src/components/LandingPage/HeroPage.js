import React from "react";
import { Container, Typography, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from "../../images/Bg3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 600,
    textAlign: "center",
    marginTop: "20vh",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: "1.5rem",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  avatar: {
    width: "10vh",
    height: "10vh",
    margin: "20px auto",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#ff7704",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ff9933",
    },
  },
  image: {
    display: "block",
    marginTop: "20px",
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
}));

const HeroPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography align="center" component="div">
        <Avatar alt="RZT Logo" src={heroImage} className={classes.avatar} />
        <Typography className={classes.title}>
          NAVIGATE YOUR <span style={{ color: "#ff7704" }}>CAREER ODYSSEY</span>
        </Typography>
        <Typography className={classes.text}>
          FROM INTERNSHIP{" "}
          <span style={{ color: "#ff7704" }}>TO FUTURE SUCCESS</span>
        </Typography>
        <Typography className={classes.text}>
          Learning <span style={{ color: "#ff7704" }}>Growing.</span>{" "}
          <span style={{ color: "#ff7704" }}>Making an impact:</span> Explore
          the journeys of those who dared to bridge the gap between theory and
          reality.
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          href="/internship"
          target="_blank"
        >
          Apply Now
        </Button>
      </Typography>
    </Container>
  );
};

export default HeroPage;
