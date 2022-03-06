import { navigation } from '@/Layouts/Layout';
import { buttonColor } from '@/styles';
import { classNames } from '@/Utils/commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/inertia-react';
export default function LeftAside({ router }) {
  return (
    <div
      className="sticky"
      style={{
        top: '5.5rem',
      }}
    >
      <nav className="space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={`${
              item.href === router.url
                ? 'dark:bg-neutral-600 dark:text-white bg-gray-100 text-gray-900'
                : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700'
            }
            px-4 py-2 rounded-md text-lg font-semibold flex items-center group`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`${
                item.href === router.url
                  ? 'dark:bg-neutral-600 dark:text-white bg-gray-100 text-gray-900'
                  : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 dark:text-gray-300 group-hover:bg-gray-50 dark:group-hover:bg-neutral-700'
              }
              flex-shrink-0 mr-3 h-6 w-6
            `}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-2 mt-8">
        <Link
          href={route('posts.create')}
          className={classNames(
            'inline-flex justify-center w-3/4 p-2 px-6 py-3 text-base font-semibold text-center rounded-full',
            buttonColor.solid,
          )}
        >
          글 작성하기
        </Link>
      </div>
    </div>
  );
}
