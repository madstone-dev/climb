import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";

export default function Home(props) {
    return (
        <Layout {...props}>
            <Head title="홈" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                SSR
            </div>
        </Layout>
    );
}