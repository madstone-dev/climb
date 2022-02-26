import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';

export default function LocalGathering(props) {
  return (
    <Layout {...props}>
      <Head title="지역모임" />
      <div className="relative flex justify-center min-h-screen items-top sm:items-center sm:pt-0">
        SSR
      </div>
    </Layout>
  );
}
