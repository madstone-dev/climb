import { borderColor } from '@/styles';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';

export default function Images({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState(images[currentIndex]);
  const checkGif = useCallback(
    (image) => image.path.split('.').pop()?.toLowerCase() === 'gif',
    [image],
  );

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setImage(images[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="flex">
      <div
        className="relative inline-flex justify-center w-full h-full overflow-hidden border border-gray-300 rounded-md dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 shrink-0 group"
        style={{ height: '340px' }}
      >
        <img
          className="object-contain w-auto h-full"
          src={'/storage/' + image.path}
        />
        {images.length > 1 && (
          <>
            <div className="absolute bottom-2 right-2">
              <span className="flex flex-wrap items-center w-full p-2 space-x-3 text-xs text-white bg-black bg-opacity-25 rounded-lg shadow group-hover:bg-opacity-50">
                {currentIndex + 1}/{images.length}
              </span>
            </div>
            {currentIndex > 0 && (
              <div className="absolute translate-y-1/2 left-2 bottom-1/2">
                <button
                  className="flex flex-wrap items-center w-full p-2 space-x-3 text-xs text-white bg-black bg-opacity-25 rounded-lg shadow group-hover:bg-opacity-50"
                  style={{ border: borderColor.innerContent }}
                  onClick={prevImage}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                </button>
              </div>
            )}
            {currentIndex < images.length - 1 && (
              <div className="absolute translate-y-1/2 right-2 bottom-1/2">
                <button
                  className="flex flex-wrap items-center w-full p-2 space-x-3 text-xs text-white bg-black bg-opacity-25 rounded-lg shadow group-hover:bg-opacity-50"
                  style={{ border: borderColor.innerContent }}
                  onClick={nextImage}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
        {checkGif(image) && (
          <div className="absolute bottom-2 right-2">
            <span className="flex flex-wrap items-center w-full p-2 space-x-3 text-xs text-white bg-black bg-opacity-25 rounded-lg shadow group-hover:bg-opacity-50">
              GIF
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
