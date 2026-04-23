import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/section/Navbar";
import Footer from "../components/section/Footer";
import Background from "../components/ui/Background";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

function Layout() {
  return (
  
      <div className="min-h-full flex flex-col bg-[var(--color-bg)]">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1 pt-[64px]">
          <Outlet />
          <WhatsAppButton/>
        </main>
        <Footer />
      </div>
      
    
  );
}

export default Layout;