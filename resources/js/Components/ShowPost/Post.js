import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faMessageDots,
  faShareNodes,
  faEllipsis,
} from '@fortawesome/pro-solid-svg-icons';
import { classNames } from '@/Utils/commons';
import { iconColor, textColor } from '@/styles';
import { getAvatar } from '@/Utils/auth.utils';
import { Link } from '@inertiajs/inertia-react';
import moment from 'moment';
import 'moment/locale/ko';
import Video from './Video';
import Images from './Images';

const MemoVideo = React.memo(({ video }) => {
  return <Video video={video} />;
});

export default function Post({ post }) {
  return (
    <li className="p-6">
      <article
        aria-labelledby={`${post.user.name}의 게시글`}
        className="flex space-x-4"
      >
        <div className="flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={getAvatar(post.user.name)}
            alt={`${post.user.name}의 프로필`}
          />
        </div>
        <div className="flex-1">
          <div>
            <div className="flex space-x-3">
              <div className="flex-1 min-w-0">
                <p
                  className={classNames(
                    'text-base font-medium',
                    textColor.primary,
                  )}
                >
                  <Link href={'#'} className="hover:underline">
                    {post.user.name}
                  </Link>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  <time dateTime={post.created_at}>
                    {moment(post.created_at).fromNow()}
                  </time>
                </p>
              </div>
              <div className="flex self-center flex-shrink-0">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button
                      className={classNames(
                        'flex items-center p-2 -m-2 rounded-full',
                        iconColor.solid,
                      )}
                    >
                      <span className="sr-only">메뉴 열기</span>
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? `bg-gray-100 dark:bg-neutral-700 ${textColor.primary}`
                                  : textColor.secondary,
                                'flex px-4 py-2 text-sm w-full',
                              )}
                            >
                              <span>Add to favorites</span>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? `bg-gray-100 dark:bg-neutral-700 ${textColor.primary}`
                                  : textColor.secondary,
                                'flex px-4 py-2 text-sm w-full',
                              )}
                            >
                              <span>Embed</span>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? `bg-gray-100 dark:bg-neutral-700 ${textColor.primary}`
                                  : textColor.secondary,
                                'flex px-4 py-2 text-sm w-full',
                              )}
                            >
                              <span>Report content</span>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div
            className={classNames('mt-4 space-y-4 text-sm', textColor.primary)}
          >
            <div>{post.content}</div>
            {post.video && <MemoVideo video={post.video} />}
            {post.images.length > 0 && <Images images={post.images} />}
          </div>
          <div className="flex justify-between mt-6 space-x-8">
            <div className="flex space-x-6">
              <span className="inline-flex items-center text-sm">
                <button
                  type="button"
                  className={classNames(
                    'inline-flex space-x-2',
                    iconColor.solid,
                  )}
                >
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span
                    className={classNames('font-medium', textColor.secondary)}
                  >
                    {/* 좋아요 수 */}
                    29
                  </span>
                  <span className="sr-only">likes</span>
                </button>
              </span>
              <span className="inline-flex items-center text-sm">
                <button
                  type="button"
                  className={classNames(
                    'inline-flex space-x-2',
                    iconColor.solid,
                  )}
                >
                  <FontAwesomeIcon
                    icon={faMessageDots}
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span
                    className={classNames('font-medium', textColor.secondary)}
                  >
                    {/* 댓글 수 */}
                    11
                  </span>
                  <span className="sr-only">replies</span>
                </button>
              </span>
            </div>
            <div className="flex text-sm">
              <span className="inline-flex items-center text-sm">
                <button
                  type="button"
                  className={classNames(
                    'inline-flex space-x-2',
                    iconColor.solid,
                  )}
                >
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span
                    className={classNames('font-medium', textColor.secondary)}
                  >
                    공유
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
