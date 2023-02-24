import ReactPlayer from 'plyr-react';
import 'plyr-react/plyr.css';

export function Plyr() {
  return (
    <div className="z-0">
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
    </div>
  );
}
