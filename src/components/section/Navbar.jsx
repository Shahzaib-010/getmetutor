import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 80) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to a section on the homepage. If not on home, navigate then scroll.
  const scrollToSection = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate("/");
      // small delay to allow Home to mount — sufficient for this simple app
      setTimeout(doScroll, 350);
    }
    // close mobile menu if open
    setIsOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const menuLinks = [
    
    { to: "/curriculum", label: "Curriculum" },
    { to: "/", label: "How it works", anchor: "howitworks" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blogs" },
  ];

  const linkClass =
    "text-md font-semibold text-gray-600 transition-colors duration-200 hover:text-gray-900 leading-none";
  const activeClass = "text-orange-600";

  return (
    <div className="font-open-sans">
      {/* ── Desktop / Tablet Navbar ── */}
      <motion.nav
        animate={{ y: hide ? -64 : 0, opacity: hide ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 z-50 w-full  bg-white border-b border-white/40 shadow-[0_1px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/5 antialiased"
      >
        <div className="w-[90%] mx-auto h-20 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="w-32 md:w-34 lg:w-40"
          >
            <img src="/images/Logo.png" alt="" />
          </NavLink>

          {/* Center links — hidden on tablet & below */}
          <div className="hidden lg:flex items-center gap-7">
            {menuLinks.map((link) => (
              link.anchor ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.anchor)}
                  className={linkClass}
                >
                  {link.label}
                </button>
              ) : (
               <NavLink
                 key={link.to}
                 to={link.to}
                 end={link.to === "/"}
                 className={({ isActive }) =>
                   `${linkClass} ${isActive ? activeClass : ""}`
                 }
               >
                 {link.label}
               </NavLink>
              )
            ))}
          </div>

          {/* CTA — hidden on tablet & below */}
          <div className="hidden lg:flex items-center">
          <Button to="/demo" text="Book Free Trial" />
          </div>

          {/* Hamburger — visible on tablet & below */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 focus:outline-none"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-1.25 items-center justify-center"
                >
                  {/* X icon */}
                  <span className="block w-5 h-[1.5px] bg-gray-800 rotate-45 translate-y-[6.5px]" />
                  <span className="block w-5 h-[1.5px] bg-gray-800 -rotate-45" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-1.25 items-center justify-center"
                >
                  <span className="block w-5 h-[1.5px] bg-gray-800" />
                  <span className="block w-5 h-[1.5px] bg-gray-800" />
                  <span className="block w-3 h-[1.5px] bg-gray-800 self-start" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 px-6 pt-24 pb-10 antialiased"
            style={{
              background: "rgba(255,255,255,0.94)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            <div className="mx-auto flex h-full w-full max-w-sm flex-col items-center">
              <div className="relative mt-4 h-16 w-full overflow-hidden">
                <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-orange-200/45 blur-3xl" />
                <div className="absolute left-1/2 top-3 h-14 w-56 -translate-x-1/2 rounded-full bg-white/65 blur-2xl" />
              </div>

              <div className="w-full border-b border-gray-200/80">
                <div className="flex flex-col">
                  {menuLinks.map((link, i) => (
                    <motion.div
                      key={link.to || link.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 + i * 0.06 }}
                      className="w-full border-b border-gray-200/80 last:border-b-0"
                    >
                      {link.anchor ? (
                        <button
                          onClick={() => scrollToSection(link.anchor)}
                          className="block w-full py-5 text-center text-[1.08rem] font-semibold tracking-tight text-gray-700 transition-all duration-200 hover:bg-gray-50/70 hover:text-gray-950"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <NavLink
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `block w-full py-5 text-center text-[1.08rem] font-semibold tracking-tight transition-all duration-200 ${
                              isActive
                                ? "bg-gray-50/80 text-gray-950"
                                : "text-gray-700 hover:bg-gray-50/70 hover:text-gray-950"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.38 }}
                className="mt-auto flex items-center justify-center gap-6 pb-2 pt-8"
              >
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 transition-colors duration-200 hover:text-gray-700"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 transition-colors duration-200 hover:text-gray-700"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 transition-colors duration-200 hover:text-gray-700"
                >
                  LinkedIn
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
