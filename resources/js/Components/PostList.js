import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faMessageDots,
  faEye,
  faShareNodes,
  faEllipsis,
} from '@fortawesome/pro-solid-svg-icons';
import { classNames } from '@/Utils/commons';

const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
        <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
        <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
      `,
  },
  // More questions...
];

export default function PostList() {
  return (
    <div className="mt-4">
      <h1 className="sr-only">Recent questions</h1>
      <ul role="list" className="space-y-4 divide-y dark:divide-neutral-700">
        {questions.map((question, index) => (
          <li key={index} className="p-6">
            <article
              aria-labelledby={'question-title-' + question.id}
              className="flex space-x-4"
            >
              <div className="flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full"
                  src={question.author.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div>
                  <div className="flex space-x-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-medium text-gray-900 dark:text-white">
                        <a
                          href={question.author.href}
                          className="hover:underline"
                        >
                          {question.author.name}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        <a href={question.href} className="hover:underline">
                          <time dateTime={question.datetime}>
                            {question.date}
                          </time>
                        </a>
                      </p>
                    </div>
                    <div className="flex self-center flex-shrink-0">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
                            <span className="sr-only">Open options</span>
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
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? 'bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-white'
                                        : 'text-gray-700 dark:text-gray-300',
                                      'flex px-4 py-2 text-sm',
                                    )}
                                  >
                                    {/* <StarIcon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" /> */}
                                    <span>Add to favorites</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? 'bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-white'
                                        : 'text-gray-700 dark:text-gray-300',
                                      'flex px-4 py-2 text-sm',
                                    )}
                                  >
                                    {/* <CodeIcon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" /> */}
                                    <span>Embed</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? 'bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-white'
                                        : 'text-gray-700 dark:text-gray-300',
                                      'flex px-4 py-2 text-sm',
                                    )}
                                  >
                                    {/* <FlagIcon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" /> */}
                                    <span>Report content</span>
                                  </a>
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
                  className="mt-4 space-y-4 text-sm text-gray-900 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: question.body }}
                />
                <div className="flex justify-between mt-6 space-x-8">
                  <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <FontAwesomeIcon
                          icon={faThumbsUp}
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                        <span className="font-medium text-gray-900">
                          {question.likes}
                        </span>
                        <span className="sr-only">likes</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <FontAwesomeIcon
                          icon={faMessageDots}
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                        <span className="font-medium text-gray-900">
                          {question.replies}
                        </span>
                        <span className="sr-only">replies</span>
                      </button>
                    </span>
                  </div>
                  <div className="flex text-sm">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <FontAwesomeIcon
                          icon={faShareNodes}
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                        <span className="font-medium text-gray-900">Share</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
