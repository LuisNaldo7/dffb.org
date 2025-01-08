// import Video from 'next-video';
// import Player from 'next-video/player';
import { videoAws16to9Aftermovie } from '@/constants';
import BackgroundPlayer from 'next-video/background-player';

// import Instaplay from 'player.style/instaplay/react';
// import v9_16 from 'https://s3.eu-central-1.amazonaws.com/bucket-dffb.org/GFFC-24-Aftermovie-9zu16.mp4';
// import v16_9 from 'https://s3.eu-central-1.amazonaws.com/bucket-dffb.org/GFFC-24-Aftermovie-16zu9.mp4';

export default function Page() {
  return (
    <div>
      {/* <Video src={v16_9}  style={{width: '42rem', }}/> */}

      <BackgroundPlayer src={videoAws16to9Aftermovie} />
      <div className="flex justify-center text-8xl mt-4">{`We'll be back soon!`}</div>
    </div>
  );
}
