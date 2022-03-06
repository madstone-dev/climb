import Header from '@/Components/header/Header';
import LeftAside from '@/Components/aside/LeftAside';
import RightAside from '@/Components/aside/RightAside';
import { routes } from '@/constances';
import {
  faHome,
  faLocationDot,
  faBoxTaped,
  faEnvelope,
} from '@fortawesome/pro-solid-svg-icons';
import { classNames } from '@/Utils/commons';
import { layoutBg } from '@/styles';
import { usePage } from '@inertiajs/inertia-react';

export const navigation = [
  { name: '피드 홈', href: route(routes.HOME), icon: faHome },
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

export default function Layout({ children }) {
  const {
    props: { auth, ziggy: router },
  } = usePage();
  return (
    <div className={classNames('flex flex-col w-full min-h-screen', layoutBg)}>
      <Header auth={auth} router={router} />
      <div className="flex-1 w-full mx-auto lg:divide-x dark:divide-neutral-700 max-w-7xl sm:flex">
        <aside className="hidden w-64 py-6 pr-6 lg:block shrink-0 sm:pl-4">
          <LeftAside router={router} />
        </aside>
        <div className="flex-1 w-full divide-x dark:divide-neutral-700 xl:grid xl:grid-cols-11">
          <main className="bg-opacity-75 xl:col-span-7 dark:bg-neutral-900">
            {children}
          </main>
          <aside className="hidden py-6 pl-6 xl:block xl:col-span-4 sm:pr-4">
            <RightAside />
          </aside>
        </div>
      </div>
    </div>
  );
}
