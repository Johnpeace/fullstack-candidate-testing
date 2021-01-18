import React from "react";

import Header from "./header";
import SearchBar from "./search-bar";
import SideBar from "./side-bar";
import Main from "./main";
import Footer from "./footer";
import Modal from "./modal";
import FilterProvider from "./context";

const Layout = () => (
  <FilterProvider>
    <div className="relative flex flex-col flex-1 min-h-screen bg-gray-100">
      <Header />
      <SearchBar />
      <div className="flex lg:mx-5 flex-1">
        <SideBar />
        <Main />
      </div>
      <Modal />
      <Footer />
    </div>
  </FilterProvider>
);

export default Layout;
