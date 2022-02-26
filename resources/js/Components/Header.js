import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import HeaderUserNav from './HeaderUserNav';
import HeaderNav from './HeaderNavs';
import { HeaderHeightContext } from '@/Providers/HeaderHeightProvider';
import Logo from './Logo';
import { routes } from '@/constances';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import SlideOver from './SlideOver';

export default function Header({ auth, router }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef();
  const { setHeaderHeight } = useContext(HeaderHeightContext);
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <div
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-gray-200 dark:border-neutral-700"
    >
      <nav className="mx-auto bg-white dark:bg-neutral-800 max-w-7xl">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center w-6 h-6 text-gray-500 rounded-md hover:text-gray-900 sm:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-lg text-gray-400 dark:Ltext-gray-300"
                />
              </button>
              <Link
                href={route(routes.HOME)}
                className="items-center flex-shrink-0 hidden space-x-2 md:flex"
              >
                <Logo className="w-6 h-6" />
                <span className="text-xl font-bold whitespace-nowrap">
                  MadStone
                </span>
              </Link>
              <div className="hidden md:ml-16 md:flex md:items-center md:space-x-4">
                <HeaderNav router={router} />
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <Link
                href={route(routes.HOME)}
                className="flex items-center flex-shrink-0 space-x-2"
              >
                <Logo className="w-6 h-6" />
                <span className="text-xl font-bold whitespace-nowrap">
                  MadStone
                </span>
              </Link>
            </div>
            <HeaderUserNav auth={auth} />
          </div>
        </div>
      </nav>
      <SlideOver
        auth={auth}
        router={router}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
}
