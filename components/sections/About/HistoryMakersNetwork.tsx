"use client"

import { motion } from "framer-motion";

const HistoryMakersNetwork = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          HISTORY MAKERS NETWORK
        </motion.h2>

        <motion.p
          className="text-gray-700 text-[14px] md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HISTORY MAKERS NETWORK is the training arm or department of MCI. This
          training section is designed purely to inspire young people with stories
          of successful men and women all over the world. Men and women of destiny
          that have shaped nations, people that have contributed immensely to our
          world. We do this to transform the MIND-SET of young people and teach them
          some of the secrets of these successful people. We just want to birth a
          DREAM and PASSION to do GOOD in them. Our single GOAL is to train and
          change the YOUNG PEOPLE, to be better citizens and successful individuals.
        </motion.p>
      </div>
    </section>
  );
};

export default HistoryMakersNetwork;
