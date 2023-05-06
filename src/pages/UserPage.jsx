import React from "react";
import Navbar from "../components/Navbar";
import ImgContainer from "../assets/imgContainer.png";
import ArtImage from "../assets/artProfile.png";
import Project1 from "../assets/Project1.png";
import { Carousel } from "flowbite-react";

function UserPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between h-full w-full">
        {/* PROFILE INFO */}
        <div className="">
          <div className="flex justify-end">
            <img src={ImgContainer} className="absolute" />
          </div>
          {/* PARENT TOP CONTENT */}
          <div className="flex justify-between mx-20 mt-10">
            {/* LEFT */}
            <div className="w-5/12">
              {/* FOTO PROFILE */}
              <div className="flex flex-col w-full">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-light-green ring-offset-base-100 ring-offset-1">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                  </div>
                </div>

                {/* NAMA PROFILE */}
                <div>
                  <h1 className="font-bold text-xl mt-5 ">Ucup Ganteng</h1>
                </div>

                {/* TITLE ART */}
                <div>
                  <h1 className="font-bold text-6xl h-44 mr-20 mt-5">
                    Hey, Thanks for Looking
                  </h1>
                </div>

                {/* BUTTON */}
                <div className="pb-10 pt-4 flex gap-5">
                  <div>
                    <button className="btn btn-sm border-none w-30 bg-light-gray text-xs text-neutral-900 px-7 hover:ring-2 hover:bg-base-200 hover:text-neutral-900 hover:ring-light-green">
                      Follow
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-sm w-30 border-none bg-light-green text-xs px-10 hover:ring-2 hover:bg-base-200 hover:text-neutral-900 hover:ring-light-green">
                      Hire
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-6/12 z-10 mr-16">
              <div className="carousel rounded-box">
                <div className="carousel-item w-full">
                  <img
                    src={ArtImage}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full">
                  <img
                    src={ArtImage}
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* PARENT BOTTOM CONTENT */}
        </div>
        {/* POST */}
        <div>
          {/* TITLE */}
          <div className="mt-5 ml-20">
            <h1 className="text-xl font-bold">Ucup Works</h1>
          </div>
          {/* LIST POST */}
          <div className="mt-10">
            {/* PARENT CARD */}
            <div className="grid grid-cols-4 gap-2 mx-20">
              {/* CARD LIST POST */}
              <div className="card w-80 shadow-xl mb-2">
                <img src={Project1} alt="project1" />
              </div>
              {/* END CARD */}
            </div>
          </div>
          {/* END POST */}
        </div>
      </div>
    </>
  );
}

export default UserPage;
