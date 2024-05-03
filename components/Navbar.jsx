"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const currentPath = usePathname();
    return (
        <nav
            className="
        fixed 
        bottom-0 
        w-full 
        h-12
        border-t
        px-3
        flex
        gap-4
        justify-center
        items-center
        md:top-12
        md:py-3
        md:flex-col
        md:justify-start
        md:left-0
        md:w-12
        md:h-full
        md:border-r
        border
        border-black
        dark:border-white
        bg-white 
        dark:bg-black 
        text-black 
        dark:text-white"
        >
            <Link
                className={
                    currentPath === "/chat"
                        ? "bg-neutral-200 dark:bg-gray-800 h-full md:h-12"
                        : "h-full md:h-12"
                }
                href="/chat"
            >
                <div
                    className="
            hover:bg-neutral-200
            dark:hover:bg-gray-800
            h-full
            w-12
            flex 
            justify-center 
            items-center"
                >
                    Ch
                </div>
            </Link>
            <Link
                className={
                    currentPath === "/posts"
                        ? "bg-neutral-200 dark:bg-gray-800 h-full md:h-12"
                        : "h-full md:h-12"
                }
                href="/posts"
            >
                <div
                    className="
            hover:bg-neutral-200
            dark:hover:bg-gray-800
            h-full
            w-12
            flex 
            justify-center 
            items-center"
                >
                    Po
                </div>
            </Link>
            <Link
                className={
                    currentPath === "/friends"
                        ? "bg-neutral-200 dark:bg-gray-800 h-full md:h-12"
                        : "h-full md:h-12"
                }
                href="/friends"
            >
                <div
                    className="
            hover:bg-neutral-200
            dark:hover:bg-gray-800
            h-full
            w-12
            flex 
            justify-center 
            items-center"
                >
                    Fr
                </div>
            </Link>
        </nav>
    );
};
export default Navbar;


export const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <nav className="flex justify-between px-5">
                <span>Logo</span>
                <span onClick={() => setIsOpen(!isOpen)} className="z-[999]">
                    menu
                </span>
            </nav>
            <div
                id={isOpen ? "open" : "close"}
                className="w-full h-screen bg-[rgba(0, 0, 0, 0.50)] fixed top-0 left-0 backdrop-blur-2xl z-[998]"
            >
                <nav
                    id="nav"
                    className="h-full w-[60%] bg-amber-100 shadow-md"
                ></nav>
            </div>
        </>
    );
};
