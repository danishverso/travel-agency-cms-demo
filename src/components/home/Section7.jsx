import React from "react";

const Section7 = () => {
  return (
    <div className="container mx-auto p-2 relative">
      <div
        className="container mx-auto p-2 relative h-[50rem] rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(./src/assets/end-cover.jpeg)`,
          position: "relative",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-15"></div>

        <div className="relative px-5 xl:px-52 gap-7 text-white flex flex-col text-center mt-20 items-center w-full h-full z-10">
          <div className="text-4xl md:text-6xl ">
            Find the Perfect trip for you and discover Extraordinary adventures
            with us!
          </div>
          <div className="text-2xl  2xl:px-52">
            Lorem ipsum dolor sit amet consectetur. Vivamus vitae nisi eget in
            sit et integer vestibulum. Mi euismod id urna malesuada!
          </div>
          <img src="./src/assets/explore-btn.svg" />

          <div className="mt-10 md:mt-10 lg:mt-20 text-7xl sm:text-9xl md:text-[10rem]">
            L O G O
          </div>

          <div className="px-14 pb-2 flex flex-col md:flex-row absolute bottom-20 items-center justify-between w-full gap-3">
            <div className="text-2xl">LOGO</div>
            <div className="lg:ml-48 flex gap-2">
              <img src="./src/assets/icons/1.svg" />
              <img src="./src/assets/icons/2.svg" />
              <img src="./src/assets/icons/3.svg" />
              <img src="./src/assets/icons/4.svg" />
              <img src="./src/assets/icons/5.svg" />
              <img src="./src/assets/icons/6.svg" />
            </div>

            <div className="flex gap-5">
              <div>Template</div>
              <div>Tools</div>
              <div>Features</div>
              <div>About Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
