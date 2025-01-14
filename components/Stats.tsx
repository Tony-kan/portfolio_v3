"use client";

import React from "react";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of Experience" },
  { num: 13, text: "Projects Completed" },
  { num: 6, text: "Technologies Mastered" },
  { num: 426, text: "Code Commits" },
];

function Stats() {
  return (
    <section>
      <div className="container mt-12 mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw]  mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center "
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl text-white font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;