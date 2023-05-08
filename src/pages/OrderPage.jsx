import React from "react";
import Navbar from "../components/Navbar";
import Project1 from "../assets/project1.png";
import ArtProfile from "../assets/artProfile.png";
import { useNavigate, useParams } from "react-router-dom";

function OrderPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto h-full w-1/2 mt-20">
        {/* FORM ORDER */}
        <form>
          <div className="w-full">
            <input
              type="text"
              name="title"
              form="title"
              //   onChange={handleOnChange}
              //   value={greeting}
              placeholder="Title"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
            />
            <textarea
              type="text"
              name="description"
              form="description"
              style={{
                resize: "none",
              }}
              //   onChange={handleOnChange}
              //   value={greeting}
              placeholder="Description Job"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-12 placeholder:text-lg text-lg h-64 pt-2"
            />
            {/* DATE */}
            <div className="flex justify-between gap-14">
              <div className="w-1/2">
                <input
                  type="date"
                  name="start_date"
                  form="start_date"
                  //   onChange={handleOnChange}
                  //   value={greeting}
                  placeholder="Start Project"
                  className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="date"
                  name="end_date"
                  form="end_date"
                  //   onChange={handleOnChange}
                  //   value={greeting}
                  placeholder="End Project"
                  className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
                />
              </div>
            </div>
            {/* PRICE */}
            <input
              type="number"
              name="price"
              form="price"
              //   onChange={handleOnChange}
              //   value={greeting}
              placeholder="Price"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
            />
          </div>
        </form>
        {/* BUTTON */}
        <div className="flex justify-center mt-14 gap-5">
          <div className="btn btn-sm border-none w-30 font-bold bg-light-gray text-sm hover:text-lg text-neutral-900 hover:bg-error px-7 hover:ring-light-green hover:ring-2 hover:text-neutral-50">
            <button onClick={() => navigate(`/post/${id}`)} className="px-5">
              Cancel
            </button>
          </div>
          <div className="btn btn-sm w-30 border-none font-bold bg-light-green text-sm hover:text-lg px-10 hover:ring-2 hover:ring-light-green">
            <button className="px-1">Binding</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
