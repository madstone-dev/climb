import React from "react";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/inertia-react";
import createServer from "@inertiajs/server";
import route from "ziggy-js";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => require(`./Pages/${name}`),
        setup: ({ App, props }) => {
            const Ziggy = {
                // Pull the Ziggy config off of the props.
                ...props.initialPage.props.ziggy,
                // Build the location, since there is
                // no window.location in Node.
                location: new URL(props.initialPage.props.ziggy.url),
            };
            global.route = (name, params, absolute, config = Ziggy) =>
                route(name, params, absolute, config);
            return <App {...props} />;
        },
    })
);
