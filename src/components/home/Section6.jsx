import React, { useState } from "react";

const Section6 = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Carter",
      subtitle: "Subtitle here",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      quote:
        "I've been on countless trips, but this one was different. Everything was perfectly organized, and the local insights made it truly unique. Can't wait for my next adventure!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      subtitle: "Adventure Enthusiast",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      quote:
        "The attention to detail and personalized experience exceeded all my expectations. Truly a journey to remember!",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      subtitle: "Travel Blogger",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      quote:
        "From start to finish, this trip was flawlessly executed. The local experiences were the highlight for me.",
    },
    // Add more testimonials if needed
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-center text-sm  mb-4">Testimonials</h2>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-3xl mb-12 font-light">
          I've been on countless trips, but this one was different. Everything
          was perfectly organized, and the local insights made it truly
          unique. Can't wait for my next adventure!
        </p>

        <div className="flex justify-center items-center gap-4 mb-2">
          {/* Profile images */}
          <div className="w-32 h-32 self-end rounded-lg overflow-hidden">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-38 rounded-lg overflow-hidden">
            <img
              src={testimonials[1].image}
              alt={testimonials[1].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 self-end rounded-lg overflow-hidden">
            <img
              src={testimonials[2].image}
              alt={testimonials[2].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-medium text-lg">
            {testimonials[activeTestimonial].name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[activeTestimonial].subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
