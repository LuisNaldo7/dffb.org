import { videoYouTubeIframe16to9Aftermovie } from '@/constants';

export default function Page() {
  return (
    <div className="w-full h-[50vh]">
      <iframe
        width="100%"
        height="100%"
        max-height="fit-content"
        src={videoYouTubeIframe16to9Aftermovie}
        title="GFFC 24 Aftermovie"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <div className="flex justify-center text-8xl mt-4">{`We'll be back soon!`}</div>
    </div>
  );
}
