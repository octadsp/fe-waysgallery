import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HomeImage from "../assets/project1.png";
import Art from "../assets/artProfile.png";
import Cogan from "../assets/cogan.jpg";
import CardPost from "../components/CardPost";
import { Link } from "react-router-dom";

import { API } from "../config/api";
import { useQuery } from "react-query";

function HomePage() {
  const [title, setTitle] = useState("today");

  // Fetching data posts from database
  let { data: posts, refetch } = useQuery("postsCache", async () => {
    const response = await API.get("/posts");
    return response.data.data;
  });

  const handlePageListChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-14 mt-10">
        {/* Filter */}
        <div className="flex justify-between items-center mx-7">
          <div>
            <select
              onChange={handlePageListChange}
              className="flex select select-sm w-32 bg-light-gray"
            >
              <option value="today">Today</option>
              <option value="following">Following</option>
            </select>
          </div>
          <div className="flex items-center w-48">
            <div className="flex items-center">
              <input
                id="image"
                name="image"
                form="image"
                type="text"
                className="border-navbar-line bg-navbar rounded-xl hover:border-primary hover:border-1"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {/* Title Content */}
        <div className="my-10 mx-7">
          <h1 className="font-bold text-2xl">{title}'s post</h1>
        </div>
        {/* Content */}
        <div className="grid grid-cols-5 grid-flow-cols gap-5">
          {/* Card */}
          {posts?.map((item, index) => (
            <Link to={`/post/` + item.id} key={index}>
              <div>
                <CardPost image={item.photos[0].image} />
              </div>
              {/* <CardPost image={Cogan} /> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
