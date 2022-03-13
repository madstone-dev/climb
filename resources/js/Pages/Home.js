import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';
import PostList from '../Components/ShowPost/PostList';

export default function Home(props) {
  return (
    <Layout>
      <Head title="피드" />
      <PostList data={props.posts} />
    </Layout>
  );
}
