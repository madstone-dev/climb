import Header from '@/Components/Header';
import LeftAside from '@/Components/LeftAside';
import RightAside from '@/Components/RightAside';
import { routes } from '@/constances';
import { HeaderHeightProvider } from '@/Providers/HeaderHeightProvider';
import {
  faHome,
  faLocationDot,
  faBoxTaped,
  faEnvelope,
} from '@fortawesome/pro-solid-svg-icons';

export default function Layout({ auth, ziggy: router, children }) {
  const navigation = [
    { name: '피드', href: route(routes.HOME), icon: faHome },
    {
      name: '지역모임',
      href: route(routes.LOCAL_GATHERING),
      icon: faLocationDot,
    },
    {
      name: '중고거래',
      href: '#',
      icon: faBoxTaped,
    },
    {
      name: '메세지',
      href: '#',
      icon: faEnvelope,
    },
  ];

  return (
    <div className="w-full min-h-full text-gray-700 bg-white bg-opacity-75 dark:bg-neutral-900 dark:text-white">
      <HeaderHeightProvider>
        <Header auth={auth} router={router} />
        <div className="w-full px-0 mx-auto lg:divide-x dark:divide-neutral-700 sm:px-4 max-w-7xl sm:flex">
          <aside className="hidden w-64 py-6 pr-6 lg:block shrink-0">
            <LeftAside navigation={navigation} router={router} />
          </aside>
          <div className="flex-1 divide-x dark:divide-neutral-700 xl:grid xl:grid-cols-11">
            <main className="bg-opacity-75 xl:col-span-7 dark:bg-neutral-900">
              {children}
            </main>
            <aside className="hidden py-6 pl-6 xl:block xl:col-span-4">
              <RightAside />
            </aside>
          </div>
        </div>
      </HeaderHeightProvider>
    </div>
  );
}
