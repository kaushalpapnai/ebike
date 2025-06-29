"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion"; // Import Framer Motion

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  timeFrame: z.string().min(1, "Select a time frame"),
  size: z.string().min(1, "Select a size"),
  quantity: z.string().min(1, "Select a quantity"),
  projectDescription: z.string().min(1, "Please describe your project"),
});

type FormData = z.infer<typeof formSchema>;

const Section7 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted", data);
      toast.success("Form submitted!");
      reset();
    } catch (error) {
      toast.error("Submission failed.");
      console.error("Submission error:", error);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section 
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="w-full px-4 py-12 mb-12"
>
      <Toaster position="top-center" />
      
      <motion.h1 
        variants={item}
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        REQUEST A QUOTE
      </motion.h1>

      <motion.form
        variants={container}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Name */}
        <motion.div variants={item}>
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...register("name")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={item}>
          <label className="block mb-1 font-medium">E-mail</label>
          <input
            {...register("email")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Phone */}
        <motion.div variants={item}>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Optional"
          />
        </motion.div>

        {/* Time Frame */}
        <motion.div variants={item}>
          <label className="block mb-1 font-medium">
            Time Frame <span className="text-red-500">*</span>
          </label>
          <select
            {...register("timeFrame")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Choose Time Frame</option>
            <option value="1 Week">1 Week</option>
            <option value="2 Weeks">2 Weeks</option>
            <option value="1 Month">1 Month</option>
          </select>
          {errors.timeFrame && (
            <p className="text-red-500 text-sm mt-1">
              {errors.timeFrame.message}
            </p>
          )}
        </motion.div>

        {/* Size */}
        <motion.div variants={item}>
          <label className="block mb-1 font-medium">
            Size <span className="text-red-500">*</span>
          </label>
          <select
            {...register("size")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Choose Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {errors.size && (
            <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
          )}
        </motion.div>

        {/* Quantity */}
        <motion.div variants={item}>
          <label className="block mb-1 font-medium">
            Quantity <span className="text-red-500">*</span>
          </label>
          <select
            {...register("quantity")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          >
            <option value="">Choose Quantity</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51+">51+</option>
          </select>
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">
              {errors.quantity.message}
            </p>
          )}
        </motion.div>

        {/* Project Description */}
        <motion.div variants={item} className="sm:col-span-2">
          <label className="block mb-1 font-medium">
            Please Describe Your Project <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("projectDescription")}
            rows={6}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Describe your project"
          />
          {errors.projectDescription && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectDescription.message}
            </p>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div 
          variants={item}
          className="sm:col-span-2 text-center text-sm text-gray-600 mt-4"
        >
          By submitting this form you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          variants={item}
          className="sm:col-span-2 flex justify-center mt-4"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Lorem Ipsum →"}
          </button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default Section7;