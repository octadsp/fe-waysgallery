import React from "react";
import Navbar from "../components/Navbar";
import Project1 from "../assets/project1.png";
import ArtProfile from "../assets/artProfile.png";

function DetailPost() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto h-full w-1/2 mt-8">
        {/* PROFILE POST */}
        <div className="flex justify-between w-full">
          {/* LEFT PROFILE */}
          <div className="flex">
            {/* AVATAR */}
            <div className="avatar mr-5">
              <div className="w-14 rounded-full ring ring-neutral-700 ring-offset-base-100 ring-offset-1">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              </div>
            </div>
            {/* PROFILE INFO */}
            <div className="flex flex-col justify-around py-1">
              <div>
                <h1 className="font-bold">TITLE</h1>
              </div>
              <div>
                <p className="font-light text-sm">User Name Info</p>
              </div>
            </div>
          </div>
          {/* RIGHT PROFILE */}
          <div className="flex items-center gap-5 w-52 justify-center">
            <div className="btn btn-sm bg-light-gray border-none text-neutral-900 hover:font-bold hover:text-neutral-50 hover:ring-2 hover:ring-light-green">
              <button className="px-2">Follow</button>
            </div>
            <div className="btn btn-sm bg-light-green border-none hover:font-bold hover:ring-2 hover:ring-light-green">
              <button className="px-4">Hire</button>
            </div>
          </div>
        </div>
        {/* IMAGE POST */}
        <div className="mt-10 w-full mx-auto">
          <div className="carousel h-[650px]">
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
        {/* DESCRIPTION POST */}
        <div className="mt-7">
          <p className="font-bold">
            👋 Say Hello&nbsp;
            <span className="text-light-green">email user</span>
          </p>
          <p className="mt-7">Description post</p>
        </div>
      </div>
    </>
  );
}

export default DetailPost;
