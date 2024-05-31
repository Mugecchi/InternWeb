import React, { useState } from "react";
import YouTube from "react-youtube";
import {
  Container,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState("4KXI9yYKex0");

  const handleChange = (event) => {
    setVideoId(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    player: {
      marginBottom: theme.spacing(2), // Add some space between player and select
    },
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const opts = {
    height: isMobile ? "200" : "390",
    width: isMobile ? "320" : "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const classes = useStyles();

  return (
    <Typography component="div" align="center">
      <YouTube videoId={videoId} opts={opts} className={classes.player} />
      <select onChange={handleChange}>
        <option value="4KXI9yYKex0">Adonis</option>
        <option value="MyMmB7vnO9c">Benedick</option>
        <option value="nYrEL9ecAWA">Randy</option>
        <option value="yB2J6kXxJIY">Migui</option>
      </select>
    </Typography>
  );
};

export default YoutubePlayer;
