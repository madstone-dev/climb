import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import { useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';
import { classNames } from '@/Utils/commons';
import {
  faHome,
  faLocationDot,
  faBoxTaped,
  faThumbsUp,
  faMessageDots,
  faShareNodes,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextareaAutosize from 'react-textarea-autosize';

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
  // More users...
];
export default function Home(props) {
  const [board, setBoard] = useState(boards[0]);
  console.log(board);

  return (
    <Layout {...props}>
      <Head title="글 작성하기" />
      <div className="p-6">
        {/* 글 작성 */}
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="flex-1">
            <div className="flex space-x-3">
              {/* 게시위치 선택 */}
              <Combobox as="div" value={board} onChange={setBoard}>
                <div className="relative w-64 mt-1">
                  <Combobox.Input
                    className="w-full py-2 pl-3 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    displayValue={(board) => board.title}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                  <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {boards.map((board, index) => (
                      <Combobox.Option
                        key={index}
                        value={board}
                        className={({ active }) =>
                          classNames(
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-900',
                          )
                        }
                      >
                        {({ active, selected }) => (
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
                              <span
                                className={classNames(
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                  active ? 'text-white' : 'text-indigo-600',
                                )}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              </Combobox>
              {/* 게시 위치 선택 끝 */}
            </div>
            <div className="mt-4 space-y-4 text-sm text-gray-900 dark:text-gray-300">
              <TextareaAutosize
                className="block w-full max-w-lg border border-gray-300 rounded-md shadow-sm resize-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={
                  'Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation. Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be'
                }
              />
            </div>
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
                    <span className="font-medium text-gray-900">11</span>
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
                    <span className="font-medium text-gray-900">11</span>
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
        </div>
      </div>
    </Layout>
  );
}
