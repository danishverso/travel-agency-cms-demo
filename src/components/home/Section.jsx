import { Search, Facebook, Instagram, Twitter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Section = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto relative p-2 rounded-xl">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Main Navigation - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Tours
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Packages
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-b-3xl px-8 py-2">
          <span className="text-xl font-bold">LOGO</span>
        </div>

        {/* Search and Hamburger Menu */}
        <div className="flex items-center space-x-4 ml-auto">
          <div className="relative hidden md:block">
            <Input
              className="pl-4 pr-4 py-1 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20 rounded-lg"
              placeholder="Find Destination"
              type="search"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
          </div>

          {/* Hamburger menu for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 md:hidden">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About Us
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Tours
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Packages
            </a>
            <div className="relative mt-2">
              <Input
                className="pl-8 pr-4 py-1 bg-gray-100 text-gray-800 placeholder:text-gray-500 border-gray-200 rounded-lg"
                placeholder="Find Destination"
                type="search"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      )}

      {/* Social Media Icons (Right Center) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col space-y-3">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white rounded-full hover:bg-white/90"
        >
          <Facebook className="w-5 h-5 text-gray-800" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-white rounded-full hover:bg-white/90"
        >
          <Instagram className="w-5 h-5 text-gray-800" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-white rounded-full hover:bg-white/90"
        >
          <Twitter className="w-5 h-5 text-gray-800" />
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative  py-30  sm:p-30 lg:p-30 xl:p-60">
        <div className="absolute inset-0">
          <img
            src="./src/assets/main.jpeg"
            alt="Tropical beach with boats"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />{" "}
          {/* Lighter overlay */}
        </div>

        <div className="relative h-full flex items-end justify-start">
          <div className="px-4 sm:px-6 lg:px-8 max-w-3xl md:ml-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Discover the World,
              <br />
              One Destination at a Time!
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Want a fully personalized travel experience? Design your own
              itinerary, choose your destinations, and travel at your own pace.
            </p>
            <Button
              className="bg-transparent cursor-pointer text-white hover:bg-white/10 border border-white rounded-lg px-8 py-6 text-lg"
              variant="outline"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
