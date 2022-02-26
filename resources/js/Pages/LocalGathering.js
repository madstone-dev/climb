import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/inertia-react";

export default function LocalGathering(props) {
    return (
        <Layout {...props}>
            <Head title="지역모임" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                SSR
            </div>
        </Layout>
    );
}
