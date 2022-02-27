import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import { classNames } from '../Utils/commons';
import PostList from '../Components/PostList';

export default function Trade(props) {
  const navigation = [
    { name: '피드', href: '#', current: false },
    { name: '지역모임', href: '#', current: false },
    {
      name: '중고거래',
      href: '#',
      current: false,
    },
  ];

  return (
    <Layout {...props}>
      <Head title="자유 게시판" />
      SSR
    </Layout>
  );
}
