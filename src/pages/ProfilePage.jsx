import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ImgContainer from "../assets/imgContainer.png";
import ArtImage from "../assets/artProfile.png";
import Project1 from "../assets/Project1.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { API, setAuthToken } from "../config/api";
import { useQuery } from "react-query";

function ProfilePage() {
  const [state] = useContext(UserContext);
  const navigate = useNavigate();

  const [profile, setProfile] = useState();

  // Fetching data user from database
  let {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useQuery(
    "usersProfileCache",
    async () => {
      const response = await API.get(`/user/${state.user.id}`);
      return response.data.data;
    },
    {
      staleTime: 1000 * 30,
    }
  );

  if (usersLoading) {
    return <h2>Loading . . .</h2>;
  }
  if (usersError) {
    return <h2>Fetching user error !</h2>;
  }

  // Fetching data user from database
  let {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
  } = useQuery(
    "postsProfileCache",
    async () => {
      const response = await API.get(`/user/${state.user.id}/posts`);
      return response.data.data;
    },
    {
      staleTime: 1000 * 30,
    }
  );

  if (postsLoading) {
    return <h2>Loading . . .</h2>;
  }

  if (postsError) {
    return <h2>Fetching post user error !</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between h-full w-full mb-20">
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
                    {usersLoading ? <h1>Wait</h1> : <img src={users.image} />}
                  </div>
                </div>

                {/* NAMA PROFILE */}
                <div>
                  {usersLoading ? (
                    <h1>wait</h1>
                  ) : (
                    <h1 className="font-bold text-xl mt-5 ">
                      {users.fullName}
                    </h1>
                  )}
                </div>

                {/* TITLE ART */}
                <div>
                  <h1 className="font-bold text-6xl h-44 mr-20 mt-5">
                    {users.greeting}
                  </h1>
                </div>

                {/* BUTTON EDIT PROFILE */}
                <div className="pb-10 pt-4">
                  <button
                    onClick={() => navigate("/edit-profile")}
                    className="btn btn-sm border-none w-30 bg-light-green text-xs px-5 hover:ring-2 hover:bg-base-200 hover:text-neutral-900 hover:ring-light-green"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            {/* RIGHT ART IMAGE */}
            <div className="w-6/12 z-10 mr-16">
              <div className="carousel rounded-box">
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
            <h1 className="text-xl font-bold">My Works</h1>
          </div>
          {/* LIST POST */}
          <div className="mt-10">
            {/* PARENT CARD */}
            <div className="grid grid-cols-5 gap-3 mx-20">
              {/* CARD LIST POST */}
              {posts?.map((item, index) => (
                <div key={index} className="card h-3/4 shadow-xl mb-2">
                  {item?.photos.map((item, index) => (
                    <div key={index} className="h-full rounded-xl w-full">
                      <img
                        src={item.image}
                        alt={index}
                        className="hover:opacity-70 h-full w-full rounded-xl object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* END CARD */}
          </div>
          {/* END POST */}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
