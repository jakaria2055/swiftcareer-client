import React from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Categories = () => {
  const categories = [
    "MERN Developer",
    "Frontend Developer",
    "Machine Learning Developer",
    "Flutter Developer",
    "UI-UX Designer",
    "Junior Backend Dev",
    "SpringBot Developer",
    "Component Builder",
    "Web Designer",
    "Robotix",
    "Android",
    "Python",
    "Data Mining expert",
  ];

  return (
    <div className="py-16 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Explore{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Job Categories
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Unlock exclusive job opportunities and talent pools in one platform.
        </p>
      </div>

      <div className="relative">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Button className="w-full h-20 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 font-semibold text-sm md:text-base rounded-2xl shadow-lg shadow-gray-100/50 hover:shadow-indigo-100/70 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-normal break-words px-4 py-6">
                  {category}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 shadow-lg transition-all duration-300" />
          <CarouselNext className="right-0 md:-right-12 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 shadow-lg transition-all duration-300" />
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
