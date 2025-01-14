"use client";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
// import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex items-center justify-center gap-6 py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mt-24 gap-4">
          <h1 className="text-white font-extrabold text-5xl text-center capitalize">
            a passionate Full-Stack Developer ,
          </h1>
          <h1 className="text-white font-extrabold text-5xl text-center capitalize">
            mobile developer &
          </h1>
          <h1 className="text-white font-extrabold text-5xl text-center capitalize">
            3D Artist
          </h1>
        </div>

        {/* btn and socials  handlers */}
        <div className="flex flex-col xl:flex-row items-center mt-24">
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </div>
        <Stats />
      </div>
    </motion.div>
  );
}
