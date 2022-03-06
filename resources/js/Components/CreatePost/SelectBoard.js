import { Fragment } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Listbox, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '@/Utils/commons';

export default function SelectBoard({ boards, board, setData }) {
  return (
    <Listbox value={board} onChange={(value) => setData('board', value)}>
      {({ open }) => (
        <>
          <div className="relative w-64 mt-1">
            <Listbox.Button className="w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md relativew-full dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
              <div className="flex items-center dark:text-gray-300">
                <FontAwesomeIcon icon={board.icon} className="w-4 h-4" />
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
              <Listbox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base text-gray-700 bg-white rounded-md shadow-lg dark:bg-neutral-800 dark:text-white dark:border dark:border-neutral-700 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {boards.map((board) => (
                  <Listbox.Option
                    key={board.id}
                    className={({ selected }) =>
                      classNames(
                        'relative py-2 pl-3 text-gray-700 cursor-default select-none pr-9 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700',
                        selected ? 'bg-gray-100 dark:bg-neutral-700' : '',
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
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
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
  );
}
