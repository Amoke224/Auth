"use client";

import { usePathname } from "next/navigation";
import ChatList from "./ChatList.jsx";

const Nav = () => {
    const pathname = usePathname();
    return (
        <>
            <nav
                aria-label="Chat List"
                className="
                    hidden
                    md:block
                    md:w-44
                    h-full
                    md:fixed
                    md:left-12
                  "
            >
                <input
                    type="text"
                    className="w-full"
                    placeholder="search chats"
                />
                <ChatList />
            </nav>
            <nav
                aria-label="Chat List"
                className={
                    pathname === "/chat"
                        ? "md:hidden h-full"
                        : "hidden"
                }
            >
                <input
                    type="text"
                    className="w-full"
                    placeholder="search chats"
                />
                <ChatList />
            </nav>
        </>
    );
};

export default Nav;
