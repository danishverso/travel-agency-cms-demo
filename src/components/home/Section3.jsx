import React from "react";

const Section3 = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-lg font-medium mb-2">About Us</h3>
        <h2 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-teal-600">Serenity</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Mauris hendrerit aliquam nisi
          sit eget sit. Natoque placerat eu volutpat est pellentesque bibendum
          iaculis sit.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:h-[40rem]">
        {/* First row */}
        <div className="col-span-12 md:col-span-4 lg:col-start-2 lg:col-span-3 md:h-[90%] self-end">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
            <img
              src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Maldives water bungalows"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Canal in Venice"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-3 md:h-[90%] self-end">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Tropical island resort"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="col-span-12 md:col-span-4 lg:col-start-2 lg:col-span-3 md:h-[90%] self-start">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
            <img
              src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Wat Arun temple in Bangkok"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
            <img
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Long-tail boat in Thailand"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 lg:col-span-3 md:h-[90%]  self-start">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Waterfall in tropical forest"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
