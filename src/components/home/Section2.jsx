import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import userIcon from "../../assets/user.svg";
import calendarIcon from "../../assets/calender.svg";
const Section2 = () => {
  // Updated array with image data including titles and descriptions
  const [imageData, setImageData] = useState([
    {
      url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1139&q=80",
      smallImageUrl:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      title: "Lagoon View Villa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons",
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      smallImageUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      title: "Beachfront Paradise",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      smallImageUrl:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      title: "Ocean View Suite",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      smallImageUrl:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      title: "Tropical Retreat",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
    },
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Functions to handle navigation with animation
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Animation settings object with much faster transitions
  const animationSettings = {
    variants: {
      enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      }),
    },
    fadeVariants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
    transition: {
      x: { type: "tween", duration: 0.1 },
      opacity: { duration: 0.1 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Find Your Destination Section */}
      <div className="mb-12">
        <h2 className="text-4xl  mb-8">
          Find Your <span className="text-teal-600">Destination!</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Departure Date Selector */}
          <div className="flex-1">
  <label className="block mb-2 font-medium">Departure</label>
  <div className="relative flex items-center border rounded-md p-3 bg-white">
    
    {/* Calendar Icon */}
    <img src={calendarIcon} alt="Calendar Icon" className="w-5 h-5 text-gray-500 mr-2" />
    
    <select className="w-full bg-transparent outline-none appearance-none">
      <option>25 February 2025</option>
      <option>26 February 2025</option>
      <option>27 February 2025</option>
    </select>
    
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</div>
          {/* Destination Selector */}
          <div className="flex-1">
            <label className="block mb-2 font-medium">Destination</label>
            <div className="relative">
              <select className="w-full p-3 border rounded-md appearance-none pr-10 bg-white">
                <option>Thailand-Phuket</option>
                <option>Bali-Indonesia</option>
                <option>Maldives</option>
                <option>Greece-Santorini</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Persons Selector */}
        {/* Persons Selector */}
<div className="flex-1">
  <label className="block mb-2 font-medium">Persons</label>
  <div className="relative flex items-center border rounded-md p-3 bg-white">
    {/* User Icon from Assets */}
    <img src={userIcon} alt="User Icon" className="w-5 h-5 text-gray-500 mr-2" />
    
    <select className="w-full bg-transparent outline-none appearance-none">
      <option>2 Adult - 2 Children's</option>
      <option>1 Adult</option>
      <option>2 Adults</option>
      <option>2 Adults - 1 Child</option>
    </select>
    
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</div>


          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full md:w-auto bg-primary text-white py-3 px-8 rounded-md hover:bg-teal-700 transition">
              Search Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Destinations Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 w-full xl:w-[80%] ">
        {/* Lagoon View Villa */}
        <div className="rounded-lg overflow-hidden aspect-square">
          <img
            src={images[currentImageIndex]}
            alt="Lagoon View Villa"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        <div className="flex flex-col justify-between">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={animationSettings.variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={animationSettings.transition}
              className="pt-5"
            >
              <h3 className="text-4xl mb-4">
                {imageData[currentImageIndex].title}
              </h3>
              <p className="text-gray-600">
                {imageData[currentImageIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-end mt-6">
            <div className="w-52 h-52 rounded-md overflow-hidden mr-4">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={
                    imageData[(currentImageIndex + 1) % imageData.length]
                      .smallImageUrl
                  }
                  alt={
                    imageData[(currentImageIndex + 1) % imageData.length].title
                  }
                  className="w-full h-full object-cover"
                  custom={direction}
                  variants={animationSettings.variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={animationSettings.transition}
                />
              </AnimatePresence>
            </div>
            <span className="text-gray-500">
              <span className="text-2xl text-black">
                {currentImageIndex + 1}
              </span>
              <span className="text-gray-400">/{imageData.length}</span>
            </span>
            <div className="ml-auto flex gap-2">
              <button
                className="p-2 border rounded-md hover:bg-gray-100 transition"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                className="p-2 border rounded-md hover:bg-gray-100 transition"
                onClick={goToNext}
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;