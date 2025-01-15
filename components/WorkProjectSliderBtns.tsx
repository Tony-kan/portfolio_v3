"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkProjectSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
}

interface WorkProjectImagesSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
  next: () => void;
  prev: () => void;
}

export const WorkProjectSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: WorkProjectSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export const WorkProjectImagesSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  prev,
  next,
}: WorkProjectImagesSliderBtnsProps) => {
  return (
    <div className={containerStyles}>
      <button className={`${btnStyles}  embla__prev left-0"`} onClick={prev}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={`${btnStyles} embla__next right-0`} onClick={next}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};
