import { videoAws16to9Aftermovie } from '@/constants';

export default function Page() {
  return (
    <div className="w-full h-96">
      <video className="w-full" controls={false} preload="auto" loop autoPlay muted playsInline>
        <source src={videoAws16to9Aftermovie} type="video/mp4" />
        {/* <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="flex justify-center text-8xl mt-4">{`We'll be back soon!`}</div>
    </div>
  );
}
