import React, { useRef } from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  const sliderRef = useRef(null);

  const destinations = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et Integer Heloo Ee",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et Integer Vestibulumviva Hello Mua Vitae Nisi Eget In Sit Et Integer Vestibulum",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80",
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Integer Vestibulumviva",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et Integer Heloo Ee",
    },
  ];

  const handleDrag = (e, { offset, velocity }) => {
    if (sliderRef.current) {
      if (offset.x < -100 && velocity.x < -0.3) {
        sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
      } else if (offset.x > 100 && velocity.x > 0.3) {
        sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-4 max-w-7xl mx-auto">
      <div className="md:mb-8">
        <h3 className="text-xl font-medium text-black mb-2">
          Top Destinations
        </h3>
        <div className="flex flex-col md:flex-row md:items-end gap-1">
          <h2 className="text-4xl md:text-5xl text-teal-700">
            Discover <span className="text-black"> Your Next Dream</span>
            <span className="ml-3">Destination</span>
          </h2>

          <p className=" text-gray-600 md:max-w-md md:ml-auto text-sm md:text-right mt-4">
            Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In
            Sit Et Integer Vestibulum. Mi Euismod Id Urna Malesuada. Farmlacius
            Facilisis Eget Pellentesque Et. Fusce Egestas Mauris Mi M Eget.
          </p>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 py-8 pb-12 overflow-auto scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none" /* IE and Edge */,
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`flex-shrink-0 ${index % 2 === 0 ? "mt-16" : "mb-12"}`}
            style={{ width: "300px" }}
          >
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{destination.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {destination.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
