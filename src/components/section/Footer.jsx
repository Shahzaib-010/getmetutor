import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Our Products", path: "/products" },
      { name: "GetmeTutor for Students", path: "/students" },
      { name: "GetmeTutor for Tutors", path: "/tutors" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
  };

  const socials = [
    { icon: FaYoutube, link: "#" },
    { icon: FaLinkedin, link: "#" },
    { icon: FaInstagram, link: "#" },
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
        <NavLink to="/" className="flex items-center gap-3 w-fit">
          <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
          <h2 className="text-2xl font-semibold tracking-wide">
            GetmeTutor
          </h2>
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
        {/* Product */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Product
          </h3>

          <div className="space-y-3">
            {footerLinks.product.map((item, i) => (
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

        {/* Company */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Company
          </h3>

          <div className="space-y-3">
            {footerLinks.company.map((item, i) => (
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
            <p>Lahore, Pakistan</p>
            <p>Online Learning Platform</p>
            <p>support@getmetutor.com</p>
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
          All rights reserved 2026 © GetmeTutor
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