import React, { useContext, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import CloudIcon from "../assets/cloudIcon.png";
import PlusIcon from "../assets/plusIcon.png";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { API } from "../config/api";
import { useMutation } from "react-query";

function UploadPost() {
  const [state, _] = useContext(UserContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [preview4, setPreview4] = useState(null);
  const [preview, setPreview] = useState(null);

  const [formPost, setFormPost] = useState({
    title: "",
    description: "",
    image: [],
  });

  const { title, description } = formPost;

  // Masukin setiap perubahan inputan berdasarkan target name kemudian value nya apa
  const handleOnChange = (e) => {
    setFormPost({
      ...formPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeImage = (e) => {
    setFormPost({
      ...formPost,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create thumbnail url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleAddForm = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("title", formPost.title);
      formData.set("description", formPost.description);

      const response = await API.post("/post", formData);
      console.log(response.data.data.id);

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formDataImage = new FormData();
      formDataImage.set("image", formPost.image[0], formPost.image[0].name);
      formDataImage.set("post_id", response.data.data.id);

      const responsePostImage = await API.post("/photo", formDataImage, config);
      console.log("success add post :", response, responsePostImage);
      navigate("/home");
    } catch (error) {
      console.log("Add post failed :", error);
    }
  });

  const handleInputImage = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <Navbar />
      {/* CONTENT */}
      <form
        onSubmit={(e) => handleAddForm.mutate(e)}
        className="flex justify-center h-[600px] mx-auto"
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center h-full w-1/2 mt-14">
          {/* TOP LEFT CONTENT */}
          <input
            onChange={handleOnChangeImage}
            id="image"
            name="image"
            form="image"
            ref={fileInputRef}
            hidden
            type="file"
            className="file-input file-input-bordered w-full max-w-xs bg-white file:-order-none"
          />
          <button
            onClick={handleInputImage}
            className="flex flex-col items-center px-36 py-32 hover:border-light-green border-4 border-dashed border-dot-line rounded-lg duration-200 ease-in-out"
          >
            <span>
              <img src={CloudIcon} />
            </span>
            <p className="text-xl">
              <span className="text-light-green font-bold">Browse</span>
              &nbsp;to choose a file
            </p>
          </button>

          {/* BOTTOM LEFT CONTENT */}
          {/* <div className="flex gap-7 mt-5">
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={preview1} className="object-cover w-14" />
            </div>
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={preview2} className="object-cover w-14" />
            </div>
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={preview3} className="object-cover w-14" />
            </div>
            <div className="border-4 border-dashed border-dot-line hover:border-light-green rounded-md px-8 py-5">
              <img src={preview4} className="object-cover w-14" />
            </div>
          </div> */}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center h-full pt-20 w-1/4">
          {/* FORM INPUT */}
          <div className="w-full">
            <input
              type="title"
              name="title"
              form="title"
              onChange={handleOnChange}
              value={title}
              placeholder="Title"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
            />
            <textarea
              type="description"
              name="description"
              form="description"
              style={{
                resize: "none",
              }}
              onChange={handleOnChange}
              value={description}
              placeholder="Description"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-12 placeholder:text-lg text-lg h-64 pt-2"
            />
          </div>
          {/* BUTTON */}
          <div className="flex gap-5">
            <div>
              <div className="btn btn-sm px-7 border-none hover:bg-light-green hover:text-neutral-50 hover:ring-2 hover:ring-neutral-600 bg-light-gray text-neutral-900 hover:text-lg">
                <button onClick={() => navigate("/home")} className="font-bold">
                  Cancel
                </button>
              </div>
            </div>
            <div>
              <div className="btn btn-sm px-9 border-none hover:bg-light-gray hover:text-neutral-900 hover:ring-2 hover:ring-neutral-600 bg-light-green text-neutral-50 hover:text-lg">
                <button type="submit" className="font-bold">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* END CONTENT */}
    </>
  );
}

export default UploadPost;
