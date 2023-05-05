import React from "react";
import Navbar from "../components/Navbar";
import CloudIcon from "../assets/cloudIcon.png";
import PlusIcon from "../assets/plusIcon.png";

function SendProject() {
  return (
    <>
      <Navbar />
      {/* CONTENT */}
      <div className="flex justify-center h-[600px] mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center h-full w-1/2 mt-14">
          {/* TOP LEFT CONTENT */}
          <div className="flex flex-col items-center py-32 px-40 hover:py-36 hover:border-light-green hover:px-44 border-4 border-dashed border-dot-line rounded-lg duration-200 ease-in-out">
            <span>
              <img src={CloudIcon} />
            </span>
            <p className="text-xl">
              <span className="text-light-green font-bold">Browse</span>
              &nbsp;to choose a Project
            </p>
          </div>

          {/* BOTTOM LEFT CONTENT */}
          <div className="flex gap-7 mt-5">
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={PlusIcon} />
            </div>
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={PlusIcon} />
            </div>
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={PlusIcon} />
            </div>
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={PlusIcon} />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center h-full pt-20 w-1/4">
          {/* FORM INPUT */}
          <div className="w-full">
            <textarea
              type="description"
              name="description"
              form="description"
              style={{
                resize: "none",
              }}
              //   onChange={handleOnChange}
              //   value={greeting}
              placeholder="Description"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-12 placeholder:text-lg text-lg h-64 pt-2"
            />
          </div>
          {/* BUTTON */}
          <div className="flex gap-5">
            <div>
              <div className="btn btn-sm px-6  border-none hover:text-neutral-50 hover:ring-4 hover:ring-light-green bg-light-green text-neutral-50 hover:px-8">
                <button className="font-bold">Send Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTENT */}
    </>
  );
}

export default SendProject;
