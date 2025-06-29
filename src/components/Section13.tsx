"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Morbi porttitor libero ac tellus faucibus tincidunt.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque ac risus bibendum, convallis sem at, sodales ex.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Etiam efficitur justo a massa pretium, sed egestas metus rhoncus.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Aenean porta fermentum sapien in tristique.",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Section13 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <motion.section
      className="w-full px-4 md:px-8 py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2
          variants={fadeInVariant}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </motion.h2>

        <div className="divide-y divide-gray-300">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              variants={fadeInVariant}
              className="py-6"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-start justify-between cursor-pointer"
              >
                <h3 className="text-md md:text-lg font-semibold text-gray-900 max-w-xl">
                  {faq.question}
                </h3>
                <div className="ml-4 mt-1">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-700" />
                  )}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-gray-700 text-sm mt-3 max-w-3xl leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Section13;