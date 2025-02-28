import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Santorini Sunset Escape",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 4,
      nights: 3,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et Integer Vestibulumiva.",
      price: 910,
    },
    {
      id: 2,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 3,
      nights: 2,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 750,
    },
    {
      id: 3,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 5,
      nights: 4,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 1050,
    },
    {
      id: 4,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 5,
      nights: 4,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 1050,
    },
    {
      id: 5,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 5,
      nights: 4,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 1050,
    },
    {
      id: 6,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 5,
      nights: 4,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 1050,
    },
    {
      id: 7,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 5,
      nights: 4,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 1050,
    },
    {
      id: 8,
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", // Replace with your actual image path
      days: 5,
      nights: 4,
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et.",
      price: 1050,
    },
    // Add more tours as needed
  ];

  const nextSlide = () => {
    if (currentSlide < tours.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="px-4 h-200 md:px-8 lg:px-32 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <h3 className="text-lg font-medium text-gray-800">Top Packages</h3>

        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl md:text-5xl ">
            Top Tours To <span className="text-primary">Spark</span> Your
            <br />
            <span className="text-primary">Wanderlust</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In
            Sit Et Integer Vestibulum. Mi Euismod Id Urna Malesuada.
          </p>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-92 h-1 bg-gray-300 rounded-full mr-4">
          <div
            className="h-full bg-gray-800 rounded-full"
            style={{ width: `${((currentSlide + 1) / tours.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex space-x-2">
          <span className="text-gray-500">
            {currentSlide + 1}/{tours.length}
          </span>
          <div className="flex space-x-1">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm disabled:opacity-50"
            >
              <span className="sr-only">Previous</span>
              &lt;
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === tours.length - 1}
              className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-sm disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Tours slider */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="ml-0 sm:ml-[23%] flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              currentSlide * 14
            }%)`,
            width: `${tours.length * 20.33}%`,
            ...(isMobile && { transform: "translateX(0)", width: "100%" }), // Override transform on mobile
          }}
        >
          {tours.map((tour, index) => (
            <>
              {index === currentSlide ? (
                <div
                  key={tour.id}
                  className={`w-full sm:w-1/3 flex-shrink-0 px-4 transition-all duration-300 ${
                    index === currentSlide ? "scale-100 opacity-100 z-10" : ""
                  }`}
                >
                  <div className=" overflow-hidden ">
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover rounded-lg "
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-3xl ">{tour.title}</h3>

                        <div className="">
                          <span className="text-black text-lg font-medium">
                            {tour.days} Days
                          </span>{" "}
                          <span className="text-black text-sm">
                            / {tour.nights} Nights
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2 line-clamp-2">
                        {tour.description}
                      </p>
                      <div className="flex sm:flex-row flex-col gap-2 justify-between items-center mt-4">
                        <div className="text-xl rounded-sm border border-black p-2 w-full sm:w-auto text-center ">
                          From ${tour.price}
                        </div>
                        <button className="bg-teal-800 text-xl text-white font-light px-4 py-2 rounded w-full sm:w-auto text-center">
                          Book now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={tour.id}
                  className={`hidden sm:block w-[14%] flex-shrink-0 px-1  transition-all duration-300 `}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full rounded-lg object-cover h-[20rem] "
                  />
                  <h3 className="text-3xl mt-5">{tour.title}</h3>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
