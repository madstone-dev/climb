import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Layout from '@/Layouts/Layout';

export default function Dashboard(props) {
  return (
    <Layout {...props}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            You're logged in!
          </div>
        </div>
      </div>
    </Layout>
  );
}
