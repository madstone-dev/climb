import { borderColor } from '@/styles';
import { classNames } from '@/Utils/commons';
import {
  faArrowDownLeftAndArrowUpRightToCenter,
  faArrowUpRightAndArrowDownLeftFromCenter,
  faPause,
  faPlay,
  faVolume,
  faVolumeXmark,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';

const formatTime = (seconds) => {
  const date = new Date(seconds * 1000);

  const mm = date.getUTCMinutes();
  const ss = date.getSeconds();

  const formattedMinute = mm + ':';
  const formattedSecond = (ss < 10 ? '0' : '') + ss;

  return formattedMinute + formattedSecond;
};

export default function Video({ video }) {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  console.log(video);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, videoRef.current]);

  const onTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      isMuted
        ? (videoRef.current.muted = true)
        : (videoRef.current.muted = false);
    }
  }, [isMuted, videoRef.current]);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  useEffect(() => {
    const fullscreen = document.fullscreenElement;
    if (fullscreen && !isExpand) {
      document.exitFullscreen();
    } else if (isExpand) {
      videoContainerRef.current.requestFullscreen();
    }
  }, [isExpand, videoContainerRef.current]);

  return (
    <div className="flex">
      <div
        ref={videoContainerRef}
        className={classNames(
          !isExpand && 'rounded-md',
          'relative inline-flex justify-center w-full overflow-hidden border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 shrink-0 group',
        )}
        style={{ height: '340px' }}
      >
        {video.converted === '1' ? (
          <>
            <video
              ref={videoRef}
              className="h-full max-w-full cursor-pointer"
              src={'/storage/' + video.path}
              onClick={togglePlay}
              onTimeUpdate={(event) => {
                onTimeUpdate(event);
              }}
              onLoadedData={(event) =>
                setDuration(Math.ceil(event.target.duration))
              }
            >
              <source poster={'/storage/' + video.thumbnail_path} />
            </video>
            <div className="absolute bottom-2 right-2">
              <div
                className="flex flex-wrap items-center w-full p-2 space-x-3 bg-black bg-opacity-25 rounded-lg shadow group-hover:bg-opacity-50"
                style={{ border: borderColor.innerContent }}
              >
                <div className="text-white">
                  <span>{formatTime(duration - currentTime)}</span>
                </div>
                <button onClick={togglePlay}>
                  {!isPlaying ? (
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="w-4 h-4 text-white"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPause}
                      className="w-4 h-4 text-white"
                    />
                  )}
                </button>
                <button onClick={toggleMute}>
                  {!isMuted ? (
                    <FontAwesomeIcon
                      icon={faVolume}
                      className="w-4 h-4 text-white"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faVolumeXmark}
                      className="w-4 h-4 text-white"
                    />
                  )}
                </button>
                <button onClick={toggleExpand}>
                  {!isExpand ? (
                    <FontAwesomeIcon
                      icon={faArrowUpRightAndArrowDownLeftFromCenter}
                      className="w-4 h-4 text-white"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowDownLeftAndArrowUpRightToCenter}
                      className="w-4 h-4 text-white"
                    />
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
