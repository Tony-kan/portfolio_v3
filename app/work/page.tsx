"use client";

import React, { useCallback, useEffect, useState } from "react";
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

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  WorkProjectSliderBtns,
  WorkProjectImagesSliderBtns,
} from "@/components/WorkProjectSliderBtns";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

const categories = ["React Native", "Swift", "Websites", "UI/UX"];

function Work() {
  // const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  // const [project, setProject] = useState(projects[0]);
  const [activeCategory, setActiveCategory] = useState("React Native");
  // const [filteredProjects, setFilteredProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(() =>
    allProjects.filter((project) => project.category === activeCategory)
  );

  useEffect(() => {
    const filtered = allProjects.filter(
      (project) => project.category === activeCategory
    );
    console.log("filtered", filtered);
    setFilteredProjects(filtered);
    setProject(filtered[0] || null);
  }, [activeCategory]);

  const [project, setProject] = useState(filteredProjects[0] || null);

  const handleSlideChange = (swiper: SwiperType) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update projects state based on current slide index
    setProject(filteredProjects[currentIndex] || null);
  };

  const calculateProjectCount = (category: string) => {
    return allProjects.filter((project) => project.category === category)
      .length;
  };

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] lg:ml-16  flex flex-col justify-center py-5 xl:px-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="React Native"
          className="flex flex-col gap-14"
          onValueChange={(value) => setActiveCategory(value)}
        >
          <TabsList className=" grid w-full grid-cols-4 gap-6 bg-[#27272c]">
            {categories.map((category) => (
              <TabsTrigger
                className="text-white text-[12px] md:text-md  font-bold hover:text-accent"
                key={category}
                value={category}
              >
                {`${category}  (${calculateProjectCount(category)})`}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="w-full">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[400px] flex flex-col xl:justify-between  order-2 xl:order-none">
                <div className="flex flex-col gap-[30px] h-[36%] group">
                  {/* outline num   */}
                  <div className="text-7xl text-white leading-none font-extrabold text-transparent text-outline  group-hover:text-outline-hover">
                    {project?.num}
                  </div>
                  {/* project category  */}

                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500  capitalize">
                    {project?.name} Project
                  </h2>
                </div>
                {/* project description */}
                <p className="text-white/60">{project?.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project?.stack?.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {/* remove  the  last comma  */}
                        {index !== project?.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border   */}
                <div className="border border-white/20"></div>

                {/* buttons  */}
                <div className="flex items-center gap-4">
                  {/* Live Project button */}
                  <Link href={project?.live || ""}>
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

                  {/* github project button */}
                  <Link href={project?.github || ""}>
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
                  {filteredProjects.map((project, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full">
                        <div className="h-[420px] relative group flex justify-center items-center bg-pink-50/20">
                          {/* overlay  */}
                          <div className="absolute  top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                          {/* image  */}
                          {/* <div className="relative w-full h-full"> */}
                          {/* <Image
                              src={project?.image}
                              fill
                              className="object-cover"
                              alt=""
                            /> */}
                          <div className="embla h-full w-full" ref={emblaRef}>
                            <div className="embla__container  h-full w-full">
                              {project?.images?.map((image, index) => (
                                <div
                                  className="embla__slide relative h-full w-full"
                                  key={index}
                                >
                                  <Image
                                    src={image}
                                    fill
                                    className="object-cover"
                                    alt=""
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          {project.images.length > 1 && (
                            <WorkProjectImagesSliderBtns
                              // containerStyles="flex  gap-4 absolute bottom-[50%] xl:bottom-10 z-20 mt-2 w-full justify-end xl:w-max xl:justify-none"
                              // btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                              containerStyles="flex z-20 px-2 justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full"
                              btnStyles="bg-accent font-extrabold hover:bg-accent-hover text-primary text-[40px] w-[30px] h-[120px] flex justify-center items-center transition-all"
                              iconsStyles=""
                              prev={scrollPrev}
                              next={scrollNext}
                            />
                          )}
                          {/* </div> */}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  {/* slider buttons  */}
                  {/* <WorkProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              /> */}

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
