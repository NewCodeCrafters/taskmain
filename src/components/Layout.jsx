import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="sticky overflow-y-auto border-r border-neutral-black-5">
        <Navbar />
      </div>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className=" sticky top-0 z-50 bg-white">
          <Header />
        </div>
        <div className="flex-1 bg-neutral-black-4 overflow-y-auto text-center text-4xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
