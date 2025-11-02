import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useSelector((store) => store.auth);

  return (
    <div className="text-sm text-white w-full">
      {/* Top offer banner */}
      <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
        <p>
          Exclusive Job Offer! Hurry,{" "}
          <span className="underline underline-offset-2">Offer Ends Soon!</span>
        </p>
      </div>

      {/* Navbar */}
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/image/SwiftCraeer_logo-removebg-preview.png"
            alt="logo"
            className="h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          <li>
            <Link to="/" className="hover:text-violet-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="hover:text-violet-600 transition">
              Browse
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-violet-600 transition">
              Jobs
            </Link>
          </li>
        </ul>

        {!user ? (
          <div className="flex items-center gap-2">
            <Link to={"/login"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
            <Link to={"/register"}>
              <Button className="bg-violet-500 hover:bg-violet-700 transform duration-300">
                Register
              </Button>{" "}
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Avatar Popover */}
            <div className="hidden sm:block">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer hover:opacity-90 transition">
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  sideOffset={8}
                  className="
                w-[250px] bg-white rounded-xl shadow-lg border border-gray-200 
                p-4 space-y-3 
                z-[9999] 
                animate-in fade-in zoom-in-95
                sm:w-[260px]
              "
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="rounded-lg cursor-pointer">
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Jakaria Ahmed
                      </h3>
                      <p className="text-xs text-gray-500">Recruiter</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 text-sm">
                    <Link
                      className="flex items-center gap-2 hover:text-violet-600 transition"
                      to="/profile"
                    >
                      <User2></User2>
                      Profile
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-red-600 hover:bg-red-50 border border-red-200"
                    >
                      <LogOut></LogOut>
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-lg p-6 md:hidden z-[999]">
            <ul className="flex flex-col space-y-4 text-lg text-gray-800">
              <li>
                <Link
                  to="/"
                  className="text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse"
                  className="text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jobs
                </Link>
              </li>
            </ul>

            {/* Mobile Popup */}
            {!user ? (
              <div className="flex items-center gap-2">
                <Link to={"/login"}>
                  <Button variant={"outline"}>Login</Button>
                </Link>
                <Link to={"/register"}>
                  <Button className="bg-violet-500 hover:bg-violet-700 transform duration-300">
                    Register
                  </Button>{" "}
                </Link>
              </div>
            ) : (
              <>
                {/* Mobile Avatar Popover */}
                <div className="hidden sm:block">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Avatar className="cursor-pointer hover:opacity-90 transition">
                        <AvatarImage
                          src="https://github.com/maxleiter.png"
                          alt="@maxleiter"
                        />
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent
                      align="end"
                      sideOffset={8}
                      className="
                w-[250px] bg-white rounded-xl shadow-lg border border-gray-200 
                p-4 space-y-3 
                z-[9999] 
                animate-in fade-in zoom-in-95
                sm:w-[260px]
              "
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="rounded-lg cursor-pointer">
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            Jakaria Ahmed
                          </h3>
                          <p className="text-xs text-gray-500">Recruiter</p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm">
                        <Link
                          className="flex items-center gap-2 hover:text-violet-600 transition"
                          to="/profile"
                        >
                          <User2></User2>
                          Profile
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-red-600 hover:bg-red-50 border border-red-200"
                        >
                          <LogOut></LogOut>
                          Logout
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
