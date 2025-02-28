import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section3 = () => {
  const ref = useRef(null);
  const isTextInView = useInView(ref, { once: false, amount: 0.3 }); // Triggers animation when 30% of the section is visible

  return (
    <section ref={ref} className="py-16 px-4 container mx-auto">
      {/* Animated Text Section */}
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-satoshi text-[24px] font-medium mb-2"
        >
          About Us
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-satoshi text-[48px] text-5xl mb-4"
        >
          Welcome to <span className="text-primary">Serenity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="font-satoshi text-[24.02px] max-w-[900px] mx-auto text-gray-600 leading-[1.3] tracking-wide text-center"
        >
          Lorem ipsum dolor sit amet consectetur. Mauris hendrerit aliquam nisi
          sit eget sit. Natoque placerat eu volutpat est pellentesque bibendum
          iaculis sit.
        </motion.p>
      </div>

      {/* Image Grid */}
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:h-[40rem]">
          {/* First row */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 md:h-[90%] self-end">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Maldives water bungalows"
                className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Canal in Venice"
                className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-4 md:h-[90%] self-end">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Tropical island resort"
                className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 md:h-[90%] self-start">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Wat Arun temple in Bangkok"
                className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Long-tail boat in Thailand"
                className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-4 md:h-[90%] self-start">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Waterfall in tropical forest"
                className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
