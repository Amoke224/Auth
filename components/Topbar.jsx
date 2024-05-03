import React from "react";

const Topbar = () => {
    return (
        <nav
            aria-label="Top Bar"
            className="
              w-full 
              h-12 
              fixed
              top-0
              flex
              px-5
              items-center
              justify-between
              dark:border-white
              bg-white 
              dark:bg-black 
              text-black 
              dark:text-white
              border
              border-b
              border-black
              dark:border-white
            "
        >
          <div className="">Logo</div>
          <div className="">User</div>
        </nav>
    );
};

export default Topbar;
