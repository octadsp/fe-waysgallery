import React from "react";

function RegisterModal() {
  const handleCloseRegisterModal = () => {
    document.querySelector("#login").click();
  };
  return (
    <>
      <input type="checkbox" id="modal-register" className="modal-toggle" />
      <label
        htmlFor="modal-register"
        className="modal cursor-pointer"
        class:modal-open="false"
      >
        <label className="modal-box relative w-96">
          <form>
            {/* TITLE */}
            <h3 className="text-3xl font-bold text-light-green mb-6 mt-3">
              Register
            </h3>

            {/* INPUT FORM */}
            <div className="">
              <input
                type="email"
                name="email"
                form="email"
                //   onChange={handleOnChange}
                //   value={email}
                placeholder="Email"
                className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5"
              />
              <input
                type="password"
                name="password"
                form="password"
                //   onChange={handleOnChange}
                //   value={email}
                placeholder="Password"
                className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5"
              ></input>
              <input
                type="text"
                name="fullName"
                form="fullName"
                //   onChange={handleOnChange}
                //   value={email}
                placeholder="Full Name"
                className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-7"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="rounded-lg hover:bg-light-gray hover:text-neutral-900 hover:ring-2 hover:ring-neutral-600 bg-light-green text-neutral-200 py-3 w-full font-bold"
            >
              Register
            </button>
            <p className="text-center  my-4 text-base">
              Dont't Have an account ? Click&nbsp;
              <span>
                <label
                  htmlFor="modal-register"
                  onClick={handleCloseRegisterModal}
                  className="cursor-pointer font-bold"
                >
                  Here
                </label>
              </span>
            </p>
          </form>
        </label>
      </label>
    </>
  );
}

export default RegisterModal;
