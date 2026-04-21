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
    
    { to: "/syllabus", label: "Syllabus" },
    { to: "/", label: "How it works", anchor: "howitworks" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blogs" },
  ];

  const linkClass =
    "text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-gray-900 leading-none";
  const activeClass = "text-gray-900";

  return (
    <div className="font-open-sans">
      {/* ── Desktop / Tablet Navbar ── */}
      <motion.nav
        animate={{ y: hide ? -64 : 0, opacity: hide ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 z-50 w-full bg-white/45 supports-backdrop-filter:bg-white/35 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 shadow-[0_1px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/5 antialiased"
      >
        <div className="w-[90%] mx-auto h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-base font-bold tracking-tight text-gray-900 select-none leading-none"
          >
            GETMETUTOR
          </NavLink>

          {/* Center links — hidden on tablet & below */}
          <div className="hidden md:flex items-center gap-7">
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
          <div className="hidden md:flex items-center">
           <Link
							to="/syllabus"
							className=" inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-[12px]  text-white transition hover:bg-orange-500"
						>
							Book Free Demo
							<ArrowRight size={15} />
						</Link>
          </div>

          {/* Hamburger — visible on tablet & below */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 focus:outline-none"
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
            className="fixed inset-0 z-40 flex flex-col justify-between px-6 pt-24 pb-12 antialiased"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Links */}
            <div className="flex flex-col items-center gap-2">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.to || link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 + i * 0.06 }}
                  className="w-full"
                >
                  {link.anchor ? (
                    <button
                      onClick={() => scrollToSection(link.anchor)}
                      className="block w-full text-center py-3.5 text-xl font-semibold tracking-tight border-b border-gray-100 transition-colors duration-200 leading-snug text-gray-500 hover:text-gray-900"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block w-full text-center py-3.5 text-xl font-semibold tracking-tight border-b border-gray-100 transition-colors duration-200 leading-snug ${
                          isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}

              {/* CTA in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 + menuLinks.length * 0.06 }}
                className="w-full mt-6"
              >
                <NavLink
                  to="/demo"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors duration-200 leading-tight"
                >
                  Demo
                </NavLink>
              </motion.div>
            </div>

            {/* Footer socials */}
            <div className="flex justify-center gap-8 text-xs uppercase tracking-[0.22em] text-gray-400 font-semibold">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-700 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-700 transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}