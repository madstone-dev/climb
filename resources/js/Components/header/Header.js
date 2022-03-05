import { useContext, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/inertia-react';
import HeaderUserNav from './HeaderUserNav';
import { HeaderStyleContext } from '@/Providers/HeaderStyleProvider';
import Logo from '../Logo';
import { routes } from '@/constances';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { classNames } from '@/Utils/commons';
import { inputColor } from '@/styles';

export default function Header({ auth }) {
  const headerRef = useRef();
  const { setHeight, show } = useContext(HeaderStyleContext);
  useEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef.current.clientHeight);
    }
    return () => {
      setHeight(0);
    };
  }, [headerRef.current]);

  return (
    <div
      ref={headerRef}
      className={classNames(
        'sticky top-0 z-40 bg-white border-b border-gray-200 bg-opacity-90 dark:bg-neutral-900 dark:border-neutral-700',
        !show && 'hidden',
      )}
    >
      <nav className="mx-auto max-w-7xl">
        <div className="flex w-full h-16 px-4">
          <div className="flex items-center lg:w-64 sm:px-4 shrink-0">
            <Link
              href={route(routes.HOME)}
              className="flex items-center flex-shrink-0 space-x-2"
            >
              <Logo className="w-6 h-6" />
              <span className="hidden text-xl font-bold whitespace-nowrap md:inline-block">
                MadStone
              </span>
            </Link>
          </div>
          <div className="flex flex-1 grid-cols-11 lg:grid">
            <div className="flex items-center justify-center flex-1 px-4 sm:px-0 md:col-span-7 sm:col-span-9">
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
                    className={classNames(
                      'block w-full py-2 pl-10 pr-3 text-sm sm:text-sm',
                      inputColor.outline,
                    )}
                    placeholder="피드 검색"
                    type="search"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end md:col-span-4 sm:col-span-2">
              <HeaderUserNav auth={auth} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
