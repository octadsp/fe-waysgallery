import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/UserContext";

function DetailPost() {
  const [state, _] = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  let { data: posts, isLoading } = useQuery("postsDetailCache", async () => {
    const response = await API.get(`/post/` + id);
    return response.data.data;
  });

  if (isLoading) {
    return <h1>Loading . . .</h1>;
  }

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
                <img src={posts.user.image} />
              </div>
            </div>
            {/* PROFILE INFO */}
            {posts.user.id === state.user.id ? (
              <Link
                to={"/profile"}
                className="flex flex-col justify-around py-1"
              >
                <div>
                  <h1 className="font-bold">{posts.title}</h1>
                </div>
                <div>
                  <p className="font-light text-sm">{posts.user.fullName}</p>
                </div>
              </Link>
            ) : (
              <Link
                to={`/user/` + posts.user.id}
                className="flex flex-col justify-around py-1"
              >
                <div>
                  <h1 className="font-bold">{posts.title}</h1>
                </div>
                <div>
                  <p className="font-light text-sm">{posts.user.fullName}</p>
                </div>
              </Link>
            )}
          </div>
          {/* RIGHT PROFILE */}
          {posts.user.id === state.user.id ? (
            <div className="flex items-center gap-5 w-52 justify-center"></div>
          ) : (
            <div className="flex items-center gap-5 w-52 justify-center">
              <div className="btn btn-sm bg-light-gray border-none text-neutral-900 hover:font-bold hover:text-neutral-50 hover:ring-2 hover:ring-light-green">
                <button className="px-2">Follow</button>
              </div>
              <div className="btn btn-sm bg-light-green border-none hover:font-bold hover:ring-2 hover:ring-light-green">
                <button
                  onClick={() => navigate(`/order/${state.user.id}`)}
                  className="px-4"
                >
                  Hire
                </button>
              </div>
            </div>
          )}
        </div>
        {/* IMAGE POST */}
        <div className="mt-10 w-full mx-auto">
          <div className="carousel h-[650px]">
            {posts?.photos?.map((item, index) => {
              if (index === activeIndex) {
                return (
                  <div key={index} className="carousel-item w-full">
                    <img src={item.image} className="w-full" />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="carousel flex justify-start mt-5 mx-5 gap-5">
            {posts?.photos?.map((item, index) => (
              <a
                key={index}
                onClick={() => setActiveIndex(index)}
                className="carousel-item"
              >
                <img src={item.image} className="h-32 w-32 object-cover" />
              </a>
            ))}
          </div>
        </div>
        {/* DESCRIPTION POST */}
        <div className="mt-7">
          <p className="font-bold">
            👋 Say Hello&nbsp;
            <span className="text-light-green">{posts.user.email}</span>
          </p>
          <p className="mt-7">{posts.description}</p>
        </div>
      </div>
    </>
  );
}

export default DetailPost;
