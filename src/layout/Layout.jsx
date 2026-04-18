import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/section/Navbar";
import Footer from "../components/section/Footer";
import Background from "../components/ui/Background";

function Layout() {
  return (
   <Background>
      <div className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[64px]">
          <Outlet />
        </main>
        <Footer />
      </div>
      </Background>
    
  );
}

export default Layout;