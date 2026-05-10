import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function UserLayout() {
  return (
    <>
      {/* <header> */}
      <Header />
      <main>
        <Outlet />
      </main>
      {/* main const  */}
      {/* <footer> */}
      <Footer />
    </>
  );
}
