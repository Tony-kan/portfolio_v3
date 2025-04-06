// components/ProjectImagesSlider.tsx
"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { WorkProjectImagesSliderBtns } from "./WorkProjectSliderBtns";

const ProjectImagesSlider = ({
  images,
  category,
}: {
  images: string[] | StaticImageData[];
  category: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla h-full w-full" ref={emblaRef}>
      <div className="embla__container h-full w-full">
        {images.map((image, index) => (
          <div
            className="embla__slide relative h-full w-full flex justify-center items-center"
            key={index}
          >
            {category === "React Native" ? (
              <Image
                src={image}
                width={500}
                height={420}
                className="w-auto h-[420px]"
                style={{ objectFit: "contain" }}
                alt={`Project image ${index + 1}`}
              />
            ) : (
              <Image
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
                alt={`Project image ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <WorkProjectImagesSliderBtns
          containerStyles="flex z-20 px-2 justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full"
          btnStyles="bg-accent font-extrabold hover:bg-accent-hover text-primary text-[40px] w-[30px] h-[120px] flex justify-center items-center transition-all"
          iconsStyles=""
          prev={scrollPrev}
          next={scrollNext}
        />
      )}
    </div>
  );
};

export default ProjectImagesSlider;