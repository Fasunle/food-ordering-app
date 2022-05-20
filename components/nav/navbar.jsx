import Image from "next/image";

import { CartIcon, HelpIcon, SearchIcon, UserIcon } from "./icons";

export const Nav = () => (
  <nav className="h-20 flex justify-between px-4 md:px-80 py-4">
    <div className="logo h-14 relative w-60">
      <Image
        src="https://www.freshmenu.com/images/fm-header-logo.svg"
        alt="Foodie Logo"
        layout="fill"
      />
    </div>
    <ul className="flex justify-between items-center w-60 ml-6">
      <a href="#" className="flex items-center">
        <SearchIcon />
        <span>Search</span>
      </a>
      <a href="/offers" target="_blank">
        <span>Offers</span>
      </a>
      <a href="#">
        <HelpIcon />
      </a>
      <div>
        <a href="#">
          <UserIcon />
        </a>
      </div>
      <a href="#">
        <CartIcon />
      </a>
    </ul>
  </nav>
);
