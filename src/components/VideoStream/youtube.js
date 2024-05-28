import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState("4KXI9yYKex0");

  const handleChange = (event) => {
    setVideoId(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    player: {
      marginBottom: theme.spacing(2), // Add some space between player and select
    },
  }));

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <YouTube videoId={videoId} opts={opts} className={classes.player} />
      <select onChange={handleChange}>
        <option value="4KXI9yYKex0">Adonis</option>
        <option value="MyMmB7vnO9c">Benedick</option>
        <option value="nYrEL9ecAWA">Randy</option>
        <option value="yB2J6kXxJIY">Migui</option>
      </select>
    </div>
  );
};

export default YoutubePlayer;
