"use client";

import { motion } from "framer-motion";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+265) 996008329",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tonykanyamuka@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "University of Malawi , Zomba , Malawi",
  },
];

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>

              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, voluptatem dicta tempore doloremque ut natus
                facere quam deleniti ad. Autem porro magni provident veniam
                voluptates incidunt. Asperiores obcaecati dolorem iusto.
              </p>
              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/* select  */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="app">Mobile Development</SelectItem>
                    <SelectItem value="design">UI / UX Design</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea  */}
              <Textarea
                className="h-[120px]"
                placeholder="Type your messsage here"
              />

              {/* btn  */}
              <Button className="max-w-40 font-bold">Send Message</Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1  flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center mb-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] text-accent flex items-center justify-center">
                      <div className="text-[28px]"> {item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 font-semibold">
                        {item.title}
                      </p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
