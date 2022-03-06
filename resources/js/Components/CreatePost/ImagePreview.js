import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImagePreview({ image, deleteImage }) {
  return (
    <div className="relative inline-block w-32 h-32 overflow-hidden rounded-md shrink-0">
      <button
        onClick={() => deleteImage(image.id)}
        type="button"
        className="absolute inline-flex items-center p-1 text-white bg-gray-600 border border-transparent rounded-full shadow-sm top-1 left-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
      </button>
      <img
        src={image.preview}
        alt={image.file.name}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
