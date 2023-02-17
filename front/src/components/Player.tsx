import React from 'react';
import ReactPlayer from 'plyr-react';
import 'plyr-react/plyr.css';

export function Player() {
  return (
    <ReactPlayer
      source={{
        type: 'video',
        sources: [
          {
            src: './images/video-test.mp4',
          },
        ],
      }}
      options={{
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'settings',
          'fullscreen',
        ],
        autoplay: false,
        loop: { active: true },
      }}
    />
  );
}
