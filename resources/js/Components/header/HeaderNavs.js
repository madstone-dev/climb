import { Link } from '@inertiajs/inertia-react';

export default function HeaderNav({ router, navs }) {
  return (
    <>
      {navs.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          aria-current={item.href === router.url ? 'page' : undefined}
          className={`${
            item.href === router.url
              ? 'dark:bg-neutral-600 dark:text-white bg-gray-100 text-gray-900'
              : 'text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700'
          }
                    px-5 py-2 rounded-md text-sm font-medium`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
