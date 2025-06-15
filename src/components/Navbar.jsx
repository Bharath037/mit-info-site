import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", type: "scroll" },
    { name: "About", type: "scroll" },
    { name: "Departments", type: "link", path: "/departments" },
    { name: "Gallery", type: "link", path: "/gallery" },
    { name: "Admissions", type: "link", path: "/admissions" },
    { name: "Projects", type: "link", path: "/projects" },
    { name: "Contact", type: "scroll" },
  ];

  useEffect(() => {
    let timeoutId;
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        timeoutId = setTimeout(() => setShow(false), 150);
      } else {
        clearTimeout(timeoutId);
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const renderLink = (link, index) =>
    link.type === "scroll" && location.pathname === "/" ? (
      <motion.li
        key={index}
        onClick={() => scrollToSection(link.name)}
        whileHover={{ scale: 1.05, color: "#a31f34" }}
        whileTap={{ scale: 0.95 }}
        className="hover:text-[#a31f34] hover:scale-105 transition cursor-pointer"
      >
        {link.name}
      </motion.li>
    ) : (
      <motion.li
        key={index}
        whileHover={{ scale: 1.05, color: "#a31f34" }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={link.path || "/"}
          className="hover:text-[#a31f34] transition cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          {link.name}
        </Link>
      </motion.li>
    );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } bg-white/80 backdrop-blur-xl border-b border-white/10 shadow-md rounded-b-2xl`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between font-inter">
          <Link
            to="/"
            className="text-3xl font-extrabold text-[#a31f34] tracking-wider drop-shadow-md hover:scale-105 transition"
          >
            MIT
          </Link>

          <ul className="hidden md:flex space-x-10 text-base font-semibold text-[#a31f34]">
            {navLinks.map(renderLink)}
          </ul>

          <Link
            to="/login"
            className="hidden md:block bg-[#a31f34] hover:bg-[#891729] text-white font-medium px-5 py-2 rounded-full shadow-md transition hover:scale-105"
          >
            Login
          </Link>

          <button
            className="md:hidden text-[#a31f34] text-3xl"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </motion.svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              key="menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-white/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center px-8"
            >
              <button
                type="button"
                aria-label="Close menu"
                className="absolute top-4 right-4 text-[#a31f34] text-5xl"
                onClick={() => setIsMenuOpen(false)}
              >
                &times;
              </button>

              <ul className="flex flex-col space-y-8 text-2xl font-bold text-[#a31f34]">
                {navLinks.map(renderLink)}
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key="login-mobile"
                >
                  <Link
                    to="/login"
                    className="bg-[#a31f34] hover:bg-[#891729] text-white font-medium px-8 py-3 rounded-full shadow-lg transition hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
