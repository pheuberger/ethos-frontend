"use client";
import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className=" border-gray-200 px-4 lg:px-6 py-5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src="/ethos-logo.png" alt="Home" width={64} height={64} priority />
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/user"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2 gap-4">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
