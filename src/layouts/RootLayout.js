import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
