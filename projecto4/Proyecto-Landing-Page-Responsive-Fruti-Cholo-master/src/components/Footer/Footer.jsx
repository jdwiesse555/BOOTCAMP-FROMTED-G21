import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLeaf,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary/10 text-white py-12 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container flex justify-between items-center"
        >
          <div className="text-2xl flex items-center gap-2 font-bold">
            <p className=" text-primary">FRUTI</p>
            <p className=" text-secondary">CHOLO</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* social icons */}
          <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
