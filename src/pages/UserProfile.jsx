import AppliedJob from "@/components/components_client/AppliedJob";
import EditProfileModel from "@/components/components_client/EditProfileModel";
import Navbar from "@/components/components_client/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import React, { useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "Nodejs",
  "Express",
  "Reactjs",
  "MongoDB",
  "Tailwindcss",
  "Bootstrap",
  "Postman",
];

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const isResume = true;
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-8 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-28 w-28 cursor-pointer border-4 border-indigo-100 shadow-md">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
                className="hover:scale-105 transition-transform duration-300"
              />
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ImTiaz Ahmed</h1>
              <p className="text-gray-600 mt-2 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="rounded-full p-3"
            variant={"outline"}
          >
            <Pen className="h-5 w-5" />
          </Button>
        </div>

        <div className="my-8 space-y-4">
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-5 w-5 text-indigo-600" />
            <span className="text-gray-700">imtiaz@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <Contact className="h-5 w-5 text-indigo-600" />
            <span className="text-gray-700">+012456789</span>
          </div>
        </div>

        <div className="my-8">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Skills</h1>
          <div className="flex flex-wrap gap-3">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 text-sm font-medium rounded-full border-0"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">No skills added</span>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
            <div>
              <label className="text-lg font-bold text-gray-900">Resume</label>
              <p className="text-gray-600 text-sm mt-1">
                Download your current resume
              </p>
            </div>
            <div>
              {isResume ? (
                <a
                  target="_blank"
                  href={"http://resume.com"}
                  className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95 inline-block"
                >
                  Download Resume
                </a>
              ) : (
                <span className="text-red-500 font-medium">
                  No Resume Found!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 mt-8 border border-gray-200 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Applied Jobs</h1>
        <AppliedJob />
      </div>

      {/* EDIT PROFILE */}
      <EditProfileModel open={open} setOpen={setOpen} />
    </>
  );
};

export default UserProfile;
