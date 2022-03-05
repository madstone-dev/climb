import { Link } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/pro-regular-svg-icons';
import { routes } from '@/constances';
import Dropdown from '../Dropdown';
import UserProfile from '../user/UserProfile';

export default function HeaderUserNav({ auth }) {
  const headerUserNavs = [
    { name: '내 정보', href: `/profile`, method: 'get' },
    { name: '로그아웃', href: route(routes.LOGOUT), method: 'post' },
  ];

  return auth.user ? (
    <div className="flex items-center">
      {/* Profile dropdown */}
      <div className="flex items-center flex-shrink-0">
        <Dropdown>
          <Dropdown.Trigger>
            <button className="flex text-sm rounded-full focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:ring-offset-black">
              <span className="sr-only">Open user menu</span>
              <UserProfile
                auth={auth}
                className="object-cover rounded-full w-9 h-9"
              />
            </button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            {headerUserNavs.map((item) => (
              <Dropdown.Link
                key={item.name}
                method={item.method}
                href={item.href}
                as={item.method === 'get' ? 'a' : 'button'}
              >
                {item.name}
              </Dropdown.Link>
            ))}
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  ) : (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Link
          href={route(routes.LOGIN)}
          className="flex items-center justify-center text-sm bg-gray-100 rounded-full w-9 h-9 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:ring-offset-black dark:bg-neutral-600"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="text-lg text-gray-400 dark:text-gray-300"
          />
        </Link>
      </div>
    </div>
  );
}
