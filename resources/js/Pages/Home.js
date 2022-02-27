import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import PostList from '../Components/PostList';

export default function Home(props) {
  return (
    <Layout {...props}>
      <Head title="피드" />
      <PostList />
    </Layout>
  );
}
