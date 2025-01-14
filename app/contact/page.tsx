"use client";

import { motion } from "framer-motion";
import React from "react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <h1 className="text-white">Contact</h1>
      </div>
    </motion.div>
  );
}

export default Contact;
