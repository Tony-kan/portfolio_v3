// "use client";

// import { motion } from "framer-motion";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { toast } from "sonner";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   // SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "(+265) 996008329",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "tonykanyamuka@gmail.com",
//   },
//   {
//     icon: <FaMapMarkedAlt />,
//     title: "Address",
//     description: "University of Malawi , Zomba , Malawi",
//   },
// ];

// function Contact() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="py-1 lg:ml-20  text-white"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[20px]">
//           {/* form  */}
//           <div className="xl:w-[54%] order-2 xl:order-none">
//             <form className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-accent">Let&apos;s work together</h3>

//               <p className="text-white/60">
//                 {`Ready to bring your ideas to life? Whether you’re looking for a
//                 collaborator on your next big project or need expert insights,let’s connect! I’m
//                 passionate about turning visions into reality, and I’d love to
//                 hear about your goals. Reach out, and let’s create something
//                 exceptional together`}
//               </p>
//               {/* input  */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <Input type="firstname" placeholder="First Name" />
//                 <Input type="lastname" placeholder="Last Name" />
//                 <Input type="email" placeholder="Email" />
//                 <Input type="phone" placeholder="Phone" />
//               </div>
//               {/* select  */}
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a Service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectItem value="web">Web Development</SelectItem>
//                     <SelectItem value="app">Mobile Development</SelectItem>
//                     <SelectItem value="design">UI / UX Design</SelectItem>
//                     <SelectItem value="backend">Backend</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               {/* textarea  */}
//               <Textarea
//                 className="h-[120px]"
//                 placeholder="Type your messsage here"
//               />

//               {/* btn  */}
//               <Button className="max-w-40 font-bold">Send Message</Button>
//             </form>
//           </div>

//           {/* info */}
//           <div className="flex-1  flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul>
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex gap-5 items-center mb-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] text-accent flex items-center justify-center">
//                       <div className="text-[28px]"> {item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60 font-semibold">
//                         {item.title}
//                       </p>
//                       <h3 className="text-xl">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Contact;

"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number must be at least 6 digits"),
  service: z.enum(["Web Development", "Mobile Application Development", "UI / UX Design", "Backend Development", "Other Services"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "Web Development",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-1 lg:ml-20 text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                {`Ready to bring your ideas to life? Whether you're looking for a
                collaborator on your next big project or need expert insights,
                let's connect! I'm passionate about turning visions into reality,
                and I'd love to hear about your goals. Reach out, and let's create
                something exceptional together`}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Input
                    placeholder="First Name"
                    {...register("firstName")}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Last Name"
                    {...register("lastName")}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Phone"
                    type="tel"
                    {...register("phone")}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Select
                  onValueChange={(value) =>
                    setValue("service", value as FormValues["service"])
                  }
                >
                  <SelectTrigger
                    className={errors.service ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile Application Development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="UI / UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Backend Development">
                        Backend
                      </SelectItem>
                      <SelectItem value="Other Services">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Type your message here"
                  className={`h-[120px] ${errors.message ? "border-red-500" : ""}`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="max-w-40 font-bold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => (
                <li key={index} className="flex gap-5 items-center mb-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] text-accent flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 font-semibold">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
