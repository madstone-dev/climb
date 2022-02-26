import { useContext, useEffect, useRef } from "react";
import { Link } from "@inertiajs/inertia-react";
import HeaderUserNav from "./HeaderUserNav";
import HeaderNav from "./HeaderNavs";
import { HeaderHeightContext } from "@/Providers/HeaderHeightProvider";
import Logo from "./Logo";

export default function Header({ auth, router }) {
    const headerRef = useRef();
    const { setHeaderHeight } = useContext(HeaderHeightContext);
    useEffect(() => {
        setHeaderHeight(headerRef.current.clientHeight);
    }, []);

    return (
        <div
            ref={headerRef}
            className="sticky top-0 z-40 border-b dark:border-neutral-700 border-gray-200"
        >
            <nav className="bg-white dark:bg-neutral-800 max-w-7xl mx-auto">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                href={route("home")}
                                className="items-center flex-shrink-0 hidden md:flex space-x-2"
                            >
                                <Logo className="w-6 h-6" />
                                <span className="text-xl font-bold whitespace-nowrap">
                                    MadStone
                                </span>
                            </Link>
                            <div className="hidden md:ml-16 md:flex md:items-center md:space-x-4">
                                <HeaderNav router={router} />
                            </div>
                        </div>
                        <div className="flex items-center md:hidden">
                            <Link
                                href={route("home")}
                                className="flex items-center flex-shrink-0 space-x-2"
                            >
                                <Logo className="w-6 h-6" />
                                <span className="text-xl font-bold whitespace-nowrap">
                                    MadStone
                                </span>
                            </Link>
                        </div>
                        <HeaderUserNav auth={auth} />
                    </div>
                </div>
            </nav>
        </div>
    );
}
