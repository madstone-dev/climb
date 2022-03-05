import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import { useState, Fragment, useRef, useContext, useEffect } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Listbox, Transition } from '@headlessui/react';
import { classNames } from '@/Utils/commons';
import {
  faHome,
  faLocationDot,
  faBoxTaped,
  faVideoPlus,
  faImage,
  faXmark,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextareaAutosize from 'react-textarea-autosize';
import { buttonColor } from '@/styles';
import { HeaderStyleContext } from '@/Providers/HeaderStyleProvider';

const boards = [
  {
    id: 1,
    title: '피드 홈',
    icon: faHome,
  },
  {
    id: 2,
    title: '지역 모임',
    icon: faLocationDot,
  },
  {
    id: 3,
    title: '중고거래',
    icon: faBoxTaped,
  },
];

export default function Home(props) {
  const [board, setBoard] = useState(boards[0]);
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const contentArea = useRef();
  const pageArea = useRef();
  const { height: headerHeight } = useContext(HeaderStyleContext);
  const [isSticky, setIsSticky] = useState(false);

  const shouldSticky = () => {
    if (pageArea.current) {
      setIsSticky(
        window.innerHeight - pageArea.current.clientHeight - headerHeight < 0,
      );
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', shouldSticky);
    }
    shouldSticky();
    return () => {
      if (window) {
        window.removeEventListener('resize', shouldSticky);
      }
    };
  }, [pageArea.current, images, video]);

  const imageChange = (event) => {
    const { files } = event.target;
    const newImages = [];
    Array.from(files).forEach((file) => {
      let id = images.length > 0 ? images[images.length - 1].id + 1 : 0;
      if (newImages.length > 0) {
        id = newImages[newImages.length - 1].id + 1;
      }
      const newImage = {
        id,
        file,
        preview: URL.createObjectURL(file),
      };
      newImages.push(newImage);
    });
    setImages([...images, ...newImages]);
    event.target.value = '';
  };

  const deleteImage = (id) => {
    const newImages = images.filter((image) => image.id !== id);
    setImages(newImages);
  };

  const videoChange = (event) => {
    const { files } = event.target;
    if (!files[0]) {
      return;
    }
    const newVideo = {
      file: files[0],
      preview: URL.createObjectURL(files[0]),
    };
    setVideo(newVideo);
    event.target.value = '';
  };

  return (
    <Layout {...props}>
      <Head title="글 작성하기" />
      <div ref={pageArea}>
        <div className="px-6 pt-6">
          <div className="space-y-4">
            <div className="flex space-x-3">
              {/* 게시위치 선택 */}
              <Listbox value={board} onChange={setBoard}>
                {({ open }) => (
                  <>
                    <div className="relative w-64 mt-1">
                      <Listbox.Button className="w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md relativew-full dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                        <div className="flex items-center dark:text-gray-300">
                          <FontAwesomeIcon
                            icon={board.icon}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 truncate">{board.title}</span>
                        </div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base text-gray-700 bg-white shadow-lg dark:bg-neutral-800 dark:text-white dark:border dark:border-neutral-700 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {boards.map((board) => (
                            <Listbox.Option
                              key={board.id}
                              className={({ selected }) =>
                                classNames(
                                  'relative py-2 pl-3 text-gray-700 cursor-default select-none pr-9 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700',
                                  selected
                                    ? 'bg-gray-100 dark:bg-neutral-700'
                                    : '',
                                )
                              }
                              value={board}
                            >
                              {({ selected }) => (
                                <>
                                  <div className="flex items-center">
                                    <FontAwesomeIcon
                                      icon={board.icon}
                                      className="w-4 h-4"
                                    />
                                    <span
                                      className={classNames(
                                        'ml-3 truncate',
                                        selected && 'font-semibold',
                                      )}
                                    >
                                      {board.title}
                                    </span>
                                  </div>

                                  {selected && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700">
                                      <CheckIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  )}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            {/* 게시글 */}
            <TextareaAutosize
              ref={contentArea}
              className="block w-full placeholder-gray-500 bg-white border border-gray-300 rounded-md resize-none dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:focus:text-gray-300 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder={'내용을 입력하세요.'}
              minRows={5}
            />
            {/* 이미지 프리뷰 */}
            {images.length > 0 && (
              <div className="flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative inline-block w-32 h-32 overflow-hidden rounded-md shrink-0"
                  >
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
                ))}
              </div>
            )}

            {/* 비디오 프리뷰 */}
            {video && (
              <div className="flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap bg-gray-50">
                <div className="relative inline-block w-full overflow-hidden border border-gray-300 rounded-md max-h-80 shrink-0">
                  <button
                    onClick={() => setVideo(null)}
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
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={classNames(
            'sticky bottom-0 flex flex-wrap justify-between px-6 pb-4 bg-white dark:bg-neutral-800',
            isSticky &&
              'shadow border-t border-gray-200 dark:border-neutral-700 mt-6',
          )}
        >
          <div className="flex mt-4 space-x-2">
            <label
              className={classNames(
                'inline-flex items-center p-2 space-x-2 rounded-md whitespace-nowrap cursor-pointer',
                buttonColor.outline,
                video && 'pointer-events-none opacity-30',
              )}
            >
              <FontAwesomeIcon
                icon={faImage}
                className="w-5 h-5"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">이미지 추가</span>
              <input
                type="file"
                className="hidden"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                multiple
                onChange={imageChange}
              />
            </label>
            <label
              className={classNames(
                'inline-flex items-center p-2 space-x-2 rounded-md whitespace-nowrap cursor-pointer',
                buttonColor.outline,
                images.length > 0 && 'pointer-events-none opacity-30',
              )}
            >
              <FontAwesomeIcon
                icon={faVideoPlus}
                className="w-5 h-5"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">비디오 추가</span>
              <input
                type="file"
                className="hidden"
                accept="video/mp4,video/mkv, video/x-m4v,video/*"
                onChange={videoChange}
              />
            </label>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className={classNames(
                'inline-flex items-center px-3 py-2 rounded-md whitespace-nowrap',
                buttonColor.solid,
              )}
            >
              <span className="text-sm font-medium">등록하기</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
