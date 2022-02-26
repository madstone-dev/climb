import Header from '@/Components/Header';
import { HeaderHeightProvider } from '@/Providers/HeaderHeightProvider';

export default function Layout({ auth, ziggy: router, children }) {
  console.log(auth, 'auth');

  return (
    <div className="flex flex-col items-stretch w-full h-full min-h-screen text-gray-700 bg-white dark:bg-neutral-800 dark:text-white">
      <HeaderHeightProvider>
        <Header auth={auth} router={router} />
        <div className="mx-auto max-w-7xl">{children}</div>
      </HeaderHeightProvider>
    </div>
  );
}
