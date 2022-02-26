import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/inertia-react";

export default function Board(props) {
    return (
        <Layout {...props}>
            <Head title="자유 게시판" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                SSR
            </div>
        </Layout>
    );
}
