import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Section4 = () => {
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
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In Sit Et Integer Heloo Ee",
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

  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    // Make sure GSAP is available
    if (!gsap) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // First, clear any existing children that might be clones
    const originalChildren = Array.from(scrollContainer.children).slice(
      0,
      destinations.length
    );
    scrollContainer.innerHTML = "";

    // Add back the original items
    originalChildren.forEach((child) => {
      scrollContainer.appendChild(child);
    });

    // Then clone items for seamless looping
    originalChildren.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Calculate total width of all original items
    const totalWidth = originalChildren.reduce(
      (width, item) => width + item.offsetWidth + 24,
      0
    ); // 24px for gap

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // Create a fresh animation
    animationRef.current = gsap.to(scrollContainer, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      paused: isHovering,
    });

    // Handle window resize
    const handleResize = () => {
      if (animationRef.current) {
        animationRef.current.kill();

        // Recalculate width after resize
        const newTotalWidth = originalChildren.reduce(
          (width, item) => width + item.offsetWidth + 24,
          0
        );

        // Create new animation with updated dimensions
        animationRef.current = gsap.to(scrollContainer, {
          x: -newTotalWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
          paused: isHovering,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run once on mount

  // Create a separate effect for handling hover state
  useEffect(() => {
    if (animationRef.current) {
      if (isHovering) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="py-16 container mx-auto">
      <div className="md:mb-8 px-4 md:px-8 lg:px-16 xl:px-12 ">
        <h3 className="text-xl font-semibold text-black mb-2">
          Top Destinations
        </h3>
        <div className="flex flex-col md:flex-row md:items-end gap-1">
          <h2 className="text-4xl font-medium md:text-5xl text-primary">
            Discover <span className="text-4xl text-black"> Your Next</span>
            <br></br>
            <span className="mr-3 text-4xl text-black">Dream</span>
            <span>Destination</span>
          </h2>

          <p className=" text-gray-600 md:max-w-md md:ml-auto text-sm md:text-right mt-4">
            Lorem Ipsum Dolor Sit Amet Consectetur. Vivamus Vitae Nisi Eget In
            Sit Et Integer Vestibulum. Mi Euismod Id Urna Malesuada. Farmlacius
            Facilisis Eget Pellentesque Et. Fusce Egestas Mauris Mi M Eget.
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 py-8 pb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: "flex",
            willChange: "transform",
          }}
        >
          {destinations.map((destination, index) => (
            <div
              key={`${destination.id}-${index}`}
              className={`flex-shrink-0 ${
                index % 2 === 0 ? "mt-16 w-[300px] " : "mb-12 w-[380px]"
              }
             
              `}
            >
              <div className="rounded-lg overflow-hidden shadow-md h-64 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
      </div>
    </section>
  );
};

export default Section4;