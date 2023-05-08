import React from "react";
import Navbar from "../components/Navbar";
import ImgContainer from "../assets/imgContainer.png";
import ArtImage from "../assets/artProfile.png";
import Project1 from "../assets/Project1.png";
import { Carousel } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";

function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetching data user from database
  let {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useQuery(
    "userProfileCache",
    async () => {
      const response = await API.get("/user/" + id);
      return response.data.data;
    },
    {
      staleTime: 1000 * 30,
    }
  );

  if (userLoading) {
    return <h2>Loading . . .</h2>;
  }
  if (userError) {
    return <h2>Fetching user error !</h2>;
  }

  // Fetching data post user from database
  let {
    data: post,
    isLoading: postLoading,
    isError: postError,
  } = useQuery(
    "postProfileCache",
    async () => {
      const response = await API.get(`/user/${id}/posts`);
      return response.data.data;
    },
    {
      staleTime: 1000 * 30,
    }
  );

  if (postLoading) {
    return <h2>Loading . . .</h2>;
  }

  if (postError) {
    return <h2>Fetching post user error !</h2>;
  }

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
                    {userLoading ? <h1>Wait</h1> : <img src={user.image} />}
                  </div>
                </div>

                {/* NAMA PROFILE */}
                <div>
                  {userLoading ? (
                    <h1>wait</h1>
                  ) : (
                    <h1 className="font-bold text-xl mt-5 ">{user.fullName}</h1>
                  )}
                </div>

                {/* TITLE ART */}
                <div>
                  <h1 className="font-bold text-6xl h-44 mr-20 mt-5">
                    {user.greeting}
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
                    <button
                      onClick={() => navigate(`/order/` + id)}
                      className="btn btn-sm w-30 border-none bg-light-green text-xs px-10 hover:ring-2 hover:bg-base-200 hover:text-neutral-900 hover:ring-light-green"
                    >
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
            <h1 className="text-xl font-bold">{user.fullName} Works</h1>
          </div>
          {/* LIST POST */}
          <div className="mt-10">
            {/* PARENT CARD */}
            <div className="grid grid-cols-4 gap-2 mx-20">
              {/* CARD LIST POST */}
              {post?.map((item, index) => (
                <div key={index} className="card h-full shadow-xl mb-2">
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
