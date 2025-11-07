import Navbar from "@/components/components_client/Navbar";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const companyArray = [];

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    companyId: "",
    position: 0,
    requirements: "",
    role: "",
    experience: "",
    jobType: "",
  });

  const {companies} = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex items-center justify-center my-5">
          <form className="">
            <div className="gird grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label>Title*</label>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                  placeholder="Job Title"
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Description*</label>
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Location*</label>
                <input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Salary*</label>
                <input
                  type="number"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>


              <div className="flex flex-col gap-1">
                <label>Position*</label>
                <input
                  type="text"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Requirements*</label>
                <input
                  type="text"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Role*</label>
                <input
                  type="text"
                  name="role"
                  value={input.role}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Experience*</label>
                <input
                  type="number"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Job Type*</label>
                <input
                  type="text"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                  placeholder="Job Description "
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                />
              </div>
            </div>

            <button className="w-full px-2 py-1 bg-violet-500 hover:bg-violet-600 transform duration-300 rounded-md">Submit Job</button>
            {
                companyArray.length === 0 && (
                    <p className="text-sm font-semibold my-3 text-center text-red-500">***Please Register a Company to Post Jobs***</p>
                )
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
