import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { headerNavs, routes } from '@/constances';
import { classNames } from '@/Utils/commons';
import { Link } from '@inertiajs/inertia-react';
import Logo from './Logo';
import { faUser } from '@fortawesome/pro-regular-svg-icons';
import { getAvatar } from '@/Utils/auth.utils';

export default function SlideOver({
  auth,
  router,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <Link
                href={route(routes.HOME)}
                className="flex items-center flex-shrink-0 px-4 space-x-2"
              >
                <Logo className="w-6 h-6" />
                <span className="text-xl font-bold whitespace-nowrap">
                  MadStone
                </span>
              </Link>
              <nav aria-label="Sidebar" className="mt-5">
                <div className="px-2 space-y-1">
                  {headerNavs.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={
                        item.href === router.url ? 'page' : undefined
                      }
                      className={classNames(
                        item.href === router.url
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-4 py-2 text-base font-medium rounded-md',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
              <Link href="#" className="flex-shrink-0 block group">
                <div className="flex items-center">
                  <div>
                    {auth.user ? (
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src={getAvatar(auth.user.name)}
                        alt={`${auth.user.name}'s profile`}
                      />
                    ) : (
                      <Link
                        href={auth.user ? '#' : route(routes.LOGIN)}
                        className="flex items-center justify-center w-10 h-10 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-300 focus:ring-white dark:focus:ring-offset-neutral-700 dark:focus:ring-neutral-700 dark:bg-neutral-600"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-lg text-gray-400 dark:text-gray-300"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      {auth.user ? auth.user.name : '로그인이 필요합니다'}
                    </p>
                    {auth.user && (
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        프로필 관리
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
