import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  const footerLinks = {
    quick: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Book Free Trial", path: "/demo" },
      { name: "Holidays", path: "/holiday" },
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
    {
      label: "UK WhatsApp & Calls:",
      flagSrc: "/images/uk-flag.webp",
      number: "+44 7474 782585",
      link: "https://wa.me/447474782585",
    },
    {
      label: "USA Calls Only:",
      flagSrc: "/images/usa%20flag.webp",
      number: "+1 929 647 2372",
      link: "tel:+19296472372",
    },
  ];

  return (
    <footer className="bg-black text-white font-open-sans px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 pt-14 pb-7 overflow-hidden">
      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        {/* Logo */}
         <NavLink
                    to="/"
                    className="w-30 md:w-34 lg:w-40"
                  >
                    <img src="/images/Logo.png" alt="" />
                  </NavLink>

        {/* Tagline */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-right">
          1 on 1 online Tutoring for UK, USA and Canadian students.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#272727] my-9" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Quick Links
          </h3>

          <div className="space-y-3">
            {footerLinks.quick.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className="block text-sm text-gray-400 hover:text-(--color-primary) transition-all duration-300"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Menu
          </h3>

          <div className="space-y-3">
            {footerLinks.menu.map((item, i) =>
              item.isHash ? (
                <a
                  key={i}
                  href={item.path}
                  className="block text-sm text-gray-400 hover:text-(--color-primary) transition-all duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={i}
                  to={item.path}
                  className="block text-sm text-gray-400 hover:text-(--color-primary) transition-all duration-300"
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </div>

       

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            We're here to help
          </h3>

          <div className="space-y-2 text-sm text-gray-400 leading-6">
            <a
              href="mailto:support@getmetutor.online"
              className="text-gray-300 hover:text-(--color-primary) transition-all duration-300 block"
            >
              <span className="inline-flex items-center gap-2">
                <FaEnvelope size={14} />
                <span>support@getmetutor.online</span>
              </span>
            </a>
            {contactNumbers.map((item, i) => (
              <div key={i}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-(--color-primary) transition-all duration-300 block"
                >
                  <span className="flex flex-col items-start gap-2">
                   <span className="flex leading-5 gap-2">
                    <img
                      src={item.flagSrc}
                      alt=""
                      className="mt-0.5 h-4 w-4 shrink-0 object-contain"
                    />
                    
                      <span className="font-medium text-gray-300">
                        {item.label}
                      </span>
                      
                    </span>
                    <span className="text-gray-100">{item.number}</span> 
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="lg:flex lg:flex-col lg:items-end">
         
          <div className="flex gap-3 mb-6">
            {socials.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="w-10 h-10 rounded-full border border-[#272727] flex items-center justify-center text-gray-300 hover:bg-(--color-primary) hover:text-black hover:border-(--color-primary) transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <div className="text-left lg:text-right">
            <p className="text-gray-400 text-sm">Book your free trial today</p>
            <p className="text-white font-medium text-sm">A free session and see the difference</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#272727] my-9" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-500">
          All rights reserved 2026 © GetMeTutor
        </p>

        <div className="flex flex-wrap gap-5">
          {footerLinks.legal.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="text-xs sm:text-sm text-gray-500 hover:text-(--color-primary) transition-all duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;