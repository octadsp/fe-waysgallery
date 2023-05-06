import React from "react";
import Navbar from "../components/Navbar";
import Project1 from "../assets/project1.png";
import ArtProfile from "../assets/artProfile.png";

function ViewProject() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto h-full mt-10 ml-48 mr-36 mb-20">
        <div className="flex">
          {/* LEFT CONTENT */}
          <div className="w-7/12">
            <div className="w-full mx-auto">
              <div className="carousel h-[700px]">
                <div id="item1" className="carousel-item w-full">
                  <img src={Project1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                  <img src={ArtProfile} className="w-full" />
                </div>
              </div>
              <div className="carousel flex justify-start mt-5 mx-5 gap-5">
                <a href="#item1" className="carousel-item">
                  <img src={Project1} className="h-32 w-32 object-cover" />
                </a>
                <a href="#item2" className="carousel-item">
                  <img src={ArtProfile} className="h-32 w-32 object-cover" />
                </a>
              </div>
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div className="w-5/12">
            <div className="ml-10">
              <div className="flex text-justify">
                <p className="text-neutral-500 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere dicta eos illum, accusamus atque omnis quos
                  reprehenderit labore voluptate nisi magnam esse assumenda odit
                  velit sint inventore natus eaque temporibus totam reiciendis.
                  Corporis quaerat possimus sint dolor similique harum beatae
                  sapiente?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProject;
