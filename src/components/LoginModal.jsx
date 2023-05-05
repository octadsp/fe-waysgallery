import React from "react";

function LoginModal() {
  const handleCloseLoginModal = () => {
    document.querySelector("#register").click();
  };
  return (
    <>
      <input type="checkbox" id="modal-login" className="modal-toggle" />
      <label
        htmlFor="modal-login"
        className="modal cursor-pointer"
        class:modal-open="false"
      >
        <label className="modal-box relative w-96">
          <form>
            {/* TITLE */}
            <h3 className="text-3xl font-bold text-light-green mb-6 mt-3">
              Login
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
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="rounded-lg hover:bg-light-gray hover:text-neutral-900 hover:ring-2 hover:ring-neutral-600 bg-light-green text-neutral-200 py-3 w-full font-bold"
            >
              Login
            </button>
            <p className="text-center  my-4 text-base">
              Dont't Have an account ? Click&nbsp;
              <span>
                <label
                  htmlFor="modal-login"
                  onClick={handleCloseLoginModal}
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

export default LoginModal;
