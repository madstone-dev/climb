import { Head, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import { useState, useRef, useContext, useEffect } from 'react';
import { classNames } from '@/Utils/commons';
import {
  faHome,
  faLocationDot,
  faBoxTaped,
  faVideoPlus,
  faImage,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextareaAutosize from 'react-textarea-autosize';
import { buttonColor, selection } from '@/styles';
import { HeaderStyleContext } from '@/Providers/HeaderStyleProvider';
import ValidationError from '@/Components/ValidationError';
import VideoThumbnail from '@/Components/CreatePost/VideoThumbnail';
import ImagePreview from '@/Components/CreatePost/ImagePreview';
import GifPreview from '@/Components/CreatePost/GifPreview';
import SelectBoard from '@/Components/CreatePost/SelectBoard';

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

export default function Home() {
  const { data, setData, post, progress, errors, clearErrors } = useForm({
    board: boards[0],
    images: [],
    video: null,
    content: '',
  });
  const [existGif, setExistGif] = useState(false);
  const contentAreaCover = useRef();
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

  const checkExistGif = () => {
    const { images } = data;
    let hasGif = false;
    images.forEach((image) => {
      const { file } = image;
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension === 'gif') {
        hasGif = true;
      }
    });
    setExistGif(hasGif);
  };

  useEffect(() => {
    checkExistGif();
  }, [data.images]);

  useEffect(() => {
    clearErrors();
    if (window) {
      window.addEventListener('resize', shouldSticky);
    }
    shouldSticky();
    return () => {
      if (window) {
        window.removeEventListener('resize', shouldSticky);
      }
    };
  }, [pageArea.current, data.images, data.video]);

  const imageChange = (event) => {
    const { files } = event.target;
    const { images } = data;

    if (images.length + files.length > 10 || existGif) {
      alert('최대 10개의 이미지 또는 1개의 gif만 사용가능합니다.');
      event.target.value = '';
      return;
    }

    const newImages = [];
    let hasGif = existGif;
    Array.from(files).forEach((file) => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      if (extension === 'gif') {
        hasGif = true;
      }
    });
    if (hasGif && images.length + files.length > 1) {
      alert('최대 10개의 이미지 또는 1개의 gif만 사용가능합니다.');
      event.target.value = '';
      return;
    }
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
    setData('images', [...images, ...newImages]);
    event.target.value = '';
  };

  const deleteImage = (id) => {
    const { images } = data;
    const newImages = images.filter((image) => image.id !== id);
    setData('images', newImages);
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
    setData('video', newVideo);
    event.target.value = '';
  };

  const submitPost = async () => {
    if (data.content) {
      post(route('posts.store'), data, {
        forceFormData: true,
      });
    }
  };

  return (
    <Layout>
      <Head title="글 작성하기" />
      <div ref={pageArea}>
        <div className="px-6 pt-6">
          <div className="space-y-4">
            <div className="flex space-x-3">
              {/* 게시위치 선택 */}
              {errors.board && <ValidationError error={errors.board} />}
              <SelectBoard
                boards={boards}
                board={data.board}
                setData={setData}
              />
            </div>
            {/* 게시글 */}
            {errors.content && <ValidationError error={errors.content} />}
            <div className="relative block w-full group">
              <div
                ref={contentAreaCover}
                className="absolute top-0 left-0 z-0 w-full h-full p-3 text-gray-900 whitespace-pre bg-white border border-transparent group:focus:text-gray-900 dark:group:focus:text-white dark:text-white dark:bg-neutral-800"
              >
                {data.content.split(' ').map((word, index) => {
                  if (word.startsWith('#') && word.length > 1) {
                    return (
                      <span key={index} className="text-blue-500">
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </div>
              <TextareaAutosize
                className={classNames(
                  'relative z-10 block w-full p-3 text-transparent placeholder-gray-500 bg-transparent border border-gray-300 rounded-md resize-none dark:border-neutral-700 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500',
                  selection.primary,
                )}
                placeholder={'내용을 입력하세요.'}
                minRows={5}
                onChange={(event) => setData('content', event.target.value)}
              />
            </div>
            {/* 이미지 프리뷰 */}
            {errors['images.0.file'] && (
              <ValidationError error={errors['images.0.file']} />
            )}
            {data.images.length > 0 && (
              <div className="flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap">
                {existGif ? (
                  <GifPreview
                    image={data.images[0]}
                    deleteImage={deleteImage}
                  />
                ) : (
                  data.images.map((image, index) => (
                    <ImagePreview
                      image={image}
                      key={index}
                      deleteImage={deleteImage}
                    />
                  ))
                )}
              </div>
            )}

            {/* 비디오 프리뷰 */}
            {errors['video.file'] && (
              <ValidationError error={errors['video.file']} />
            )}
            {data.video && (
              <VideoThumbnail
                video={data.video}
                shouldSticky={shouldSticky}
                setData={setData}
              />
            )}
          </div>
        </div>
        <div
          className={classNames(
            'sticky bottom-0 flex flex-wrap justify-between px-6 pb-4 z-20',
            isSticky &&
              'shadow border-t border-gray-200 dark:border-neutral-700 mt-6 bg-white dark:bg-neutral-900',
          )}
        >
          <div className="flex mt-4 space-x-2">
            <label
              className={classNames(
                'inline-flex items-center p-2 space-x-2 rounded-md whitespace-nowrap cursor-pointer',
                buttonColor.outline,
                data.video && 'pointer-events-none opacity-30',
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
                data.images.length > 0 && 'pointer-events-none opacity-30',
              )}
            >
              <FontAwesomeIcon
                icon={faVideoPlus}
                className="w-5 h-5"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">
                비디오 {data.video ? '변경' : '추가'}
              </span>
              <input
                type="file"
                className="hidden"
                accept="video/*"
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
                !data.content && 'opacity-30 pointer-events-none',
              )}
              onClick={submitPost}
              disabled={!data.content}
            >
              <span className="text-sm font-medium">등록하기</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
