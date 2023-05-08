import React from "react";

// Assets
import WaveBottomLeft from "./../assets/WaveBottomLeft.png";
import WaveBottomRight from "../assets/WaveBottomRight.png";
import WaveTopLeft from "../assets/WaveTopLeft.png";
import LogoWaysGallery from "../assets/logoWaysGallery.png";
import LandingImage from "../assets/landingImg.png";
import LogoGallery from "../assets/logoGallery.png";
import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";

function LandingPage() {
  return (
    <>
      <div className="relative h-[100vh]">
        <div className="flex flex-col justify-between h-full">
          <div className="absolute top-0 left-0 z-[-1]">
            <img src={WaveTopLeft} className="lg:h-96" />
          </div>
          <div className="flex justify-between">
            <div className="absolute bottom-0 left-0 z-[-1]">
              <img src={WaveBottomLeft} className="lg:h-64" />
            </div>
            <div className="absolute bottom-0 right-0 z-[-1]">
              <img src={WaveBottomRight} className="lg:w-42" />
            </div>

            {/* CONTENT */}
            <div className="flex justify-between items-center w-full px-20">
              {/* LEFT CONTENT */}
              <div className="pt-24 pl-5">
                {/* IMAGE LOGO */}
                <div className="flex">
                  <div className="pt-2">
                    <img src={LogoWaysGallery} alt="waysgallery" />
                  </div>
                  <div className="flex justify-end">
                    <img src={LogoGallery} alt="gallery" className="absolute" />
                  </div>
                </div>

                {/* TITLE */}
                <div>
                  <h1 className="font-bold text-2xl pt-5">
                    show your work to inspire everyone
                  </h1>
                </div>

                {/* DESCRIPTION */}
                <div className="pt-1">
                  <p className="text-sm flex flex-col">
                    Ways Exhibition is a website design creators gather to share
                    their work
                    <span>with other creators</span>
                  </p>
                </div>

                {/* BUTTON */}
                <div className="mt-5">
                  <div className="flex gap-5 ">
                    <label
                      id="register"
                      htmlFor="modal-register"
                      className="btn btn-sm px-7 bg-light-green hover:bg-neutral-100 hover:ring-2 hover:ring-light-green hover:text-neutral-900"
                    >
                      Join Now
                    </label>
                    <RegisterModal />

                    <label
                      id="login"
                      htmlFor="modal-login"
                      className="btn btn-sm px-10 bg-light-gray hover:bg-neutral-100 hover:ring-2 hover:ring-light-green text-neutral-900"
                    >
                      Login
                    </label>
                    <LoginModal />
                  </div>
                </div>
              </div>
              {/* RIGHT CONTENT */}
              <div>
                <img src={LandingImage} alt="landingImg" className="scale-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
