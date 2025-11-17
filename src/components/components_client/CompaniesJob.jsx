import React from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useSelector } from "react-redux";
import useGetAllRegisterCompany from "@/hooks/useGetAllRegisterCompany";
import { Building2, MapPin, Users } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";

const CompaniesJob = () => {
    const navigate = useNavigate();
  const { allCompanies = [] } = useSelector((store) => store.company);
  const { loading, error } = useGetAllRegisterCompany();

  if (loading) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
        <p className="text-gray-600 text-lg">Loading companies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-600 text-2xl">!</span>
        </div>
        <p className="text-red-600 text-lg mb-2">Error loading companies</p>
        <p className="text-gray-600">Please login to see company or try again later</p>
      </div>
    );
  }

  if (!allCompanies || allCompanies.length === 0) {
    return (
      <div className="py-20 px-4 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-600 text-lg mb-2">No companies available</p>
        <p className="text-gray-500">Check back later for new opportunities</p>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Explore{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Top Companies
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover leading companies and their exclusive job opportunities in
          one platform
        </p>
      </div>

      <div className="relative">
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-4 md:-ml-6">
            {allCompanies.map((company) => (
              <CarouselItem
                key={company._id}
                className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-gray-100 hover:border-indigo-200 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-2 p-6 h-48 flex flex-col justify-between">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Company Content */}
                  <div className="relative z-10">
                    {/* Company Icon and Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Avatar className="w-12 h-12 mx-auto border-2 border-gray-200">
                          <AvatarImage
                            src={
                              company.logo || "https://via.placeholder.com/100"
                            }
                            alt={`${company.name} logo`}
                            className="hover:scale-105 transition-transform duration-300"
                          />
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-lg truncate group-hover:text-indigo-700 transition-colors duration-300">
                          {company.name}
                        </h3>
                        {company.location && (
                          <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{company.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Company Description */}
                    {company.description && (
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
                        {company.description}
                      </p>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="relative z-10">
                    <Button
                      onClick={() => navigate(`/company/job/${company._id}`)}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200/50 active:scale-95 group-hover:scale-105"
                    >
                      View Jobs
                      <Users className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced Carousel Navigation */}
          <CarouselPrevious className="left-0 md:-left-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-500 hover:text-white shadow-xl transition-all duration-300 w-12 h-12 rounded-2xl" />
          <CarouselNext className="right-0 md:-right-12 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-500 hover:text-white shadow-xl transition-all duration-300 w-12 h-12 rounded-2xl" />
        </Carousel>
      </div>

      {/* Stats Section */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {allCompanies.length}+
            </div>
            <div className="text-sm text-gray-600">Companies</div>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">100+</div>
            <div className="text-sm text-gray-600">Job Opportunities</div>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Active Candidates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesJob;
