import { setSearchedQuery } from "@/redux/jobSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start">
          {/* Star part */}
          <div className="flex items-center mt-24 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg shadow-indigo-100/50 border border-indigo-100/50">
            <div className="flex -space-x-3 pr-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-9 object-cover rounded-full border-2 border-white hover:-translate-y-1 transition-all duration-300 z-[1] shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-9 object-cover rounded-full border-2 border-white hover:-translate-y-1 transition-all duration-300 z-2 shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-9 object-cover rounded-full border-2 border-white hover:-translate-y-1 transition-all duration-300 z-[3] shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-9 object-cover rounded-full border-2 border-white hover:-translate-y-1 transition-all duration-300 z-[4] shadow-md"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-9 rounded-full border-2 border-white hover:-translate-y-1 transition-all duration-300 z-[5] shadow-md"
              />
            </div>

            <div className="border-l border-gray-200 pl-4">
              <div className="flex gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-transparent fill-indigo-500 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm font-medium text-gray-700 mt-1">
                No.1 Job Hunt Website
              </p>
            </div>
          </div>

          <h1 className="text-center md:text-left text-4xl leading-[50px] md:text-5xl md:leading-[68px] font-bold max-w-2xl text-gray-900 mt-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Build Your Future
            </span>
            <br />
            The Right Career Path Awaits
          </h1>

          <p className="text-center md:text-left text-lg text-gray-600 max-w-2xl mt-6 leading-relaxed">
            Unlock exclusive job opportunities and talent pools in one platform.
            Join SwiftCareer - the fastest way to connect students with career
            opportunities.
          </p>

          <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl gap-3 mt-8 h-14 px-4 shadow-lg shadow-indigo-100/30 hover:shadow-indigo-200/40 transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 max-w-md w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="#9CA3AF"
              className="flex-shrink-0"
            >
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
            </svg>
            <input
              type="text"
              placeholder="Find Your Dream Job..."
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-full outline-none bg-transparent placeholder-gray-400 text-gray-700 text-base font-medium"
            />
            <button
              onClick={searchJobHandler}
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 w-32 h-10 rounded-xl text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 active:scale-95"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-xl opacity-20"></div>
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-5.png"
            alt="hero"
            className="relative max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300 hover:scale-105 drop-shadow-2xl"
          />
        </div>
      </main>
    </section>
  );
};

export default Headers;
