import React from "react";
import TopBar from "../Layout/Topbar";
import NavBar from "../Layout/NavBar";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <TopBar />
      {/* navbar */}
      <NavBar />
      {/* cart drawer   */}
    </header>
  );
}
