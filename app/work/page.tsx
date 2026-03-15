"use client";

import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects as allProjects } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { WorkProjectSliderBtns } from "@/components/WorkProjectSliderBtns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectImagesSlider from "@/components/ProjectImagesSlider";

const categories = ["React Native", "Swift", "Websites", "UI/UX"];

function Work() {
  const [activeCategory, setActiveCategory] = useState("React Native");
  const [filteredProjects, setFilteredProjects] = useState(() =>
    allProjects.filter((project) => project.category === activeCategory),
  );
  const [project, setProject] = useState(filteredProjects[0] || null);

  useEffect(() => {
    const filtered = allProjects.filter(
      (project) => project.category === activeCategory,
    );
    setFilteredProjects(filtered);
    setProject(filtered[0] || null);
  }, [activeCategory]);

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setProject(filteredProjects[0]);
    }
  }, [filteredProjects]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    if (filteredProjects[currentIndex]) {
      setProject(filteredProjects[currentIndex]);
    }
  };

  const calculateProjectCount = (category: string) => {
    return allProjects.filter((project) => project.category === category)
      .length;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] lg:ml-16 flex flex-col justify-center py-5 xl:px-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="React Native"
          className="flex flex-col gap-14"
          onValueChange={(value) => setActiveCategory(value)}
        >
          <TabsList className="grid w-full grid-cols-4 gap-6 bg-[#27272c]">
            {categories.map((category) => (
              <TabsTrigger
                className="text-white text-[12px] md:text-md font-bold hover:text-accent"
                key={category}
                value={category}
              >
                {`${category} (${calculateProjectCount(category)})`}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="w-full">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[400px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px] h-[36%] group">
                  <div className="text-7xl text-white leading-none font-extrabold text-transparent text-outline group-hover:text-outline-hover">
                    {project?.num}
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project?.name} Project
                  </h2>
                </div>
                <p className="text-white/60">{project?.description}</p>
                <ul className="flex gap-4">
                  {project?.stack?.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project?.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project?.live || ""} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project?.github || ""} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlideChange}
                >
                  {filteredProjects.map((project, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[420px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <ProjectImagesSlider
                          images={project.images}
                          category={activeCategory}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  {filteredProjects.length > 1 && (
                    <WorkProjectSliderBtns
                      containerStyles="flex gap-2 right-0 bottom-0 xl:bottom-10 z-20 mt-2 w-full xl:absolute justify-end xl:w-max xl:justify-none"
                      btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                      iconsStyles=""
                    />
                  )}
                </Swiper>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}

export default Work;
