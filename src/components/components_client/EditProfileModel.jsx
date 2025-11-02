import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const EditProfileModel = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills.map((skills) => skills),
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (input.file instanceof File) {
        // Only use FormData if there's a new file
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        formData.append("file", input.file);

        res = await axios.post(
          `${USER_API_ENDPOINT}/update/profile`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      } else {
        // Send JSON data if no file
        res = await axios.post(
          `${USER_API_ENDPOINT}/update/profile`,
          {
            fullname: input.fullname,
            email: input.email,
            phoneNumber: input.phoneNumber,
            bio: input.bio,
            skills: input.skills,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      }

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "User Update failed!");
    }
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          {/* EDITING FORM */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className={"text-right"} htmlFor="name">
                  Name
                </Label>
                <input
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  id="fullname"
                  name="fullname"
                  className="col-span-3 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className={"text-right"} htmlFor="email">
                  Email
                </Label>
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  name="email"
                  className="col-span-3 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className={"text-right"} htmlFor="phone">
                  Phone
                </Label>
                <input
                  type="text"
                  id="phone"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  name="phone"
                  className="col-span-3 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className={"text-right"} htmlFor="bio">
                  Bio
                </Label>
                <input
                  type="text"
                  id="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  name="bio"
                  className="col-span-3 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className={"text-right"} htmlFor="skills">
                  Skills
                </Label>
                <input
                  type="text"
                  id="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  name="skills"
                  className="col-span-3 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className={"text-right"} htmlFor="file">
                  Resume
                </Label>
                <input
                  type="file"
                  id="file"
                  value={input.file}
                  onChange={fileChangeHandler}
                  name="file"
                  accept="application/pdf"
                  className="col-span-3 w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <>
                  <div>
                    <div>
                      <span>Loading...</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button type="submit">Save Changes</button>
                </>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfileModel;
