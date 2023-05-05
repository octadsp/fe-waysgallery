import React from "react";
import Navbar from "../components/Navbar";
import CameraIcon from "../assets/cameraIcon.png";

function EditProfile() {
  return (
    <>
      <Navbar />
      {/* CONTENT */}
      <div className="flex justify-center h-[600px] mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex justify-center items-center h-full w-1/2">
          <div className=" p-56 hover:p-60 border-4 border-dashed border-dot-line rounded-lg duration-200 ease-in-out">
            <p className="text-xl">
              <span className="text-light-green font-bold">Upload</span>
              &nbsp;Best Your Art
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center h-full pt-16 w-1/4">
          {/* FOTO PROFILE */}
          <div className="avatar mb-10">
            <div className="w-40 rounded-full border-4 border-dot-line border-dashed hover:border-light-green hover:w-48 duration-200 ease-in-out">
              <img src={CameraIcon} className="scale-50" />
            </div>
          </div>

          {/* FORM INPUT */}
          <div className="w-full">
            <input
              type="greeting"
              name="greeting"
              form="greeting"
              //   onChange={handleOnChange}
              //   value={greeting}
              placeholder="Greeting"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
            />
            <input
              type="fullName"
              name="fullName"
              form="fullName"
              //   onChange={handleOnChange}
              //   value={greeting}
              placeholder="Full Name"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-12 placeholder:text-lg text-lg"
            />
          </div>
          {/* BUTTON SAVE */}
          <div className="btn btn-sm px-8 border-none hover:bg-light-gray hover:text-neutral-900 hover:ring-2 hover:ring-neutral-600 bg-light-green text-neutral-200 hover:text-lg">
            <button className="">Save</button>
          </div>
        </div>
      </div>
      {/* END CONTENT */}
    </>
  );
}

export default EditProfile;
