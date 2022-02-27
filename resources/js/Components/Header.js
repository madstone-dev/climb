import { useContext, useEffect, useMemo, useRef } from 'react';
import { Link } from '@inertiajs/inertia-react';
import HeaderUserNav from './HeaderUserNav';
import { HeaderHeightContext } from '@/Providers/HeaderHeightProvider';
import Logo from './Logo';
import { routes } from '@/constances';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';

export default function Header({ auth }) {
  const headerRef = useRef();
  const { setHeaderHeight } = useContext(HeaderHeightContext);
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <div
      ref={headerRef}
      className="sticky top-0 z-40 bg-white bg-opacity-75 border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
    >
      <nav className="mx-auto max-w-7xl">
        <div className="px-4 mx-auto">
          <div className="grid h-16 grid-cols-10">
            <div className="flex items-center col-span-2 sm:px-4">
              <Link
                href={route(routes.HOME)}
                className="flex items-center flex-shrink-0 space-x-2"
              >
                <Logo className="w-6 h-6" />
                <span className="hidden text-xl font-bold whitespace-nowrap lg:inline-block">
                  MadStone
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-10 col-span-8 lg:grid-cols-11">
              <div className="flex items-center justify-end col-span-8 pr-0 lg:pr-6 lg:col-span-7">
                <div className="w-full max-w-lg">
                  <label htmlFor="search" className="sr-only">
                    검색
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:focus:text-gray-300 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      placeholder="피드 검색"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end col-span-2 lg:col-span-4">
                <HeaderUserNav auth={auth} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
