import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
  const footerLinks = {
    quick: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Book Free Trial", path: "/demo" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Refund Policy", path: "/refund-policy" },
    ],
    menu: [
      { name: "Curriculum", path: "/curriculum" },
      { name: "How It Works", path: "/#howitworks", isHash: true },
      { name: "Reviews", path: "/#reviews", isHash: true },
      { name: "Pricing", path: "/pricing" },
      { name: "Blogs", path: "/blogs" },
    ],

    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
  };

  const socials = [
    { icon: FaFacebook, link: "https://www.facebook.com/getmetutoronline", label: "Facebook" },
    { icon: FaInstagram, link: "https://www.instagram.com/getmetutor.online", label: "Instagram" },
    { icon: FaYoutube, link: "https://www.youtube.com/@GetMeTutorOnline", label: "YouTube" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/company/get-me-tutor-online/", label: "LinkedIn" },
  ];

  const contactNumbers = [
    { number: "+1 (929) 647-2372", link: "tel:+19296472372" },
    { number: "+44 7474 782585", link: "https://wa.me/447474782585" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black text-white font-open-sans px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 pt-14 pb-7 overflow-hidden">
      {/* Top */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
      >
        {/* Logo */}
         <NavLink
                    to="/"
                    className="sm:w-30 md:w-34 lg:w-40"
                  >
                    <img src="/images/Logo.png" alt="" />
                  </NavLink>

        {/* Tagline */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-right">
          Smarter learning, better results.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-[#272727] my-9" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Quick Links
          </h3>

          <div className="space-y-3">
            {footerLinks.quick.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className="block text-sm text-gray-400 hover:text-[var(--color-primary)] transition-all duration-300"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>

        {/* Menu */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Menu
          </h3>

          <div className="space-y-3">
            {footerLinks.menu.map((item, i) =>
              item.isHash ? (
                <a
                  key={i}
                  href={item.path}
                  className="block text-sm text-gray-400 hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={i}
                  to={item.path}
                  className="block text-sm text-gray-400 hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </motion.div>

       

        {/* Contact */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-gray-400 leading-6">
            <a
              href="mailto:support@getmetutor.online"
              className="text-gray-300 hover:text-[var(--color-primary)] transition-all duration-300 block"
            >
              support@getmetutor.online
            </a>
            {contactNumbers.map((item, i) => (
              <div key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-all duration-300 block"
                >
                  {item.number}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:flex lg:flex-col lg:items-end"
        >
         
          <div className="flex gap-3 mb-6">
            {socials.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="w-10 h-10 rounded-full border border-[#272727] flex items-center justify-center text-gray-300 hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>

          <div className="text-left lg:text-right">
            <p className="text-gray-400 text-sm">Trusted Education</p>
            <p className="text-white font-medium text-sm">
              Platform Partner
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#272727] my-9" />

      {/* Bottom */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="text-xs sm:text-sm text-gray-500">
          All rights reserved 2026 © GetMeTutor
        </p>

        <div className="flex flex-wrap gap-5">
          {footerLinks.legal.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="text-xs sm:text-sm text-gray-500 hover:text-[var(--color-primary)] transition-all duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;