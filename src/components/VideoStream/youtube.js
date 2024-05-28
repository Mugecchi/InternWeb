import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState('4KXI9yYKex0');

  const handleChange = (event) => {
    setVideoId(event.target.value);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{ margin: '100px 0 0 400px' }}>
      <YouTube videoId={videoId} opts={opts} />
      <select onChange={handleChange} style={{ margin: '0 0 0 -200px' }}>
        <option value="4KXI9yYKex0">Adonis</option>
        <option value="MyMmB7vnO9c">Benedick</option>
        <option value="nYrEL9ecAWA">Randy</option>
        <option value="yB2J6kXxJIY">Migui</option>
      </select>
    </div>
  );
};

export default YoutubePlayer;
