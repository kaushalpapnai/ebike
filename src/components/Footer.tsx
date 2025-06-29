"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum"],
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

 const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]  
    }
  }
};

  return (
    <motion.footer
      className="bg-slate-800 text-white py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <motion.div variants={item} className="lg:col-span-1">
            <div className="bg-gray-200 px-6 py-3 inline-block">
              <span className="text-xl font-bold text-black tracking-wider">
                LOGO
              </span>
            </div>
          </motion.div>

          {/* Footer Links Columns */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={item} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;