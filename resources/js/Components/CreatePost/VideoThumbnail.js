import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function VideoThumbnail({ video, setData, shouldSticky }) {
  return (
    <div className="flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap">
      <div className="relative inline-block w-full overflow-hidden border border-gray-300 rounded-md dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 max-h-80 shrink-0">
        <button
          onClick={() => setData('video', null)}
          type="button"
          className="absolute z-10 inline-flex items-center p-1 text-white bg-gray-600 border border-transparent rounded-full shadow-sm top-1 left-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
        </button>
        <video
          src={video.preview}
          alt={video.file.name}
          className="w-full h-full max-w-full"
          onLoadedData={() => shouldSticky()}
          muted
          autoPlay
          loop
        />
        <span className="absolute z-10 bottom-3 right-3 inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-600 text-white font-semibold">
          VIDEO
        </span>
      </div>
    </div>
  );
}
