import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import PostList from '../Components/PostList';

export default function Home() {
  return (
    <Layout>
      <Head title="피드" />
      <PostList />
    </Layout>
  );
}
