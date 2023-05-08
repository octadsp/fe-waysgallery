import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import CameraIcon from "../assets/cameraIcon.png";
import { UserContext } from "../context/UserContext";
import { useMutation } from "react-query";
import { API } from "../config/api";

function EditProfile() {
  const [state] = useContext(UserContext);
  const [preview, setPreview] = useState(null);
  const [editProfile, setEditProfile] = useState({
    fullName: "",
    greeting: "",
    image: "",
  });

  const { fullName, greeting, image } = editProfile;

  // Masukin setiap perubahan inputan berdasarkan target name kemudian value nya apa
  const handleOnChange = (e) => {
    setEditProfile({
      ...editProfile,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleAddForm = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formDataProfile = new FormData();
      formDataProfile.set("fullName", editProfile.fullName);
      formDataProfile.set("greeting", editProfile.greeting);
      formDataProfile.set(
        "image",
        editProfile.image[0],
        editProfile.image[0].name
      );

      const response = await API.patch(
        `/user/${state.user.id}`,
        formDataProfile,
        config
      );

      console.log("success update profile :", response);
      navigate("/profile");
    } catch (error) {
      console.log("Add post failed :", error);
    }
  });
  return (
    <>
      <Navbar />
      {/* CONTENT */}
      <div className="flex justify-center h-[600px] mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex justify-center items-center h-full w-1/2">
          <div className=" p-56 hover:p-60 border-4 border-dashed border-dot-line rounded-lg duration-200 ease-in-out">
            <p className="text-xl">
              <span className="text-light-green font-bold">Upload</span>
              &nbsp;Best Your Art
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <form
          onSubmit={(e) => handleAddForm.mutate(e)}
          className="flex flex-col items-center h-full pt-16 w-1/4"
        >
          {/* FOTO PROFILE */}
          <div className="avatar mb-10">
            <div className="w-40 rounded-full border-4 border-dot-line border-dashed hover:border-light-green hover:w-48 duration-200 ease-in-out">
              <img src={CameraIcon} className="scale-50" />
            </div>
          </div>
          <input
            type="file"
            onChange={handleOnChange}
            name="image"
            form="image"
          />

          {/* FORM INPUT */}
          <div className="w-full">
            <input
              type="text"
              name="greeting"
              form="greeting"
              onChange={handleOnChange}
              value={greeting}
              placeholder="Greeting"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5 placeholder:text-lg text-lg"
            />
            <input
              type="text"
              name="fullName"
              form="fullName"
              onChange={handleOnChange}
              value={fullName}
              placeholder="Full Name"
              className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-12 placeholder:text-lg text-lg"
            />
          </div>
          {/* BUTTON SAVE */}
          <div className="btn btn-sm px-8 border-none hover:bg-light-gray hover:text-neutral-900 hover:ring-2 hover:ring-neutral-600 bg-light-green text-neutral-50 hover:text-lg">
            <button type="submit" className="font-bold">
              Save
            </button>
          </div>
        </form>
      </div>
      {/* END CONTENT */}
    </>
  );
}

export default EditProfile;
