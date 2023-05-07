import React, { useContext, useState } from "react";

import { API, setAuthToken } from "../config/api";
import { useMutation } from "react-query";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

function LoginModal() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const [_, dispatch] = useContext(UserContext);

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formLogin;

  // Masukin setiap perubahan inputan berdasarkan target name kemudian value nya apa
  const handleOnChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", formLogin);

      console.log("Login Berhasil : ", response);
      // Masukin status succes login ke UserContext
      setTimeout(() => {
        // Send data to UserContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
        setAuthToken(localStorage.token);
        navigate("/home");
      }, 1000);

      const alert = <SuccessAlert title={"Login Success! 😊"} />;
      setMessage(alert);
      setFormLogin({
        email: "",
        password: "",
      });
    } catch (error) {
      const alert = (
        <ErrorAlert
          title={"Username and Password not match! please try again 🫣"}
        />
      );
      setMessage(alert);
      console.log("Login Failed : ", error);
    }
  });

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
          {message && message}
          <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
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
                onChange={handleOnChange}
                value={email}
                placeholder="Email"
                className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5"
              />
              <input
                type="password"
                name="password"
                form="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Password"
                className="input ring-2 hover:ring-neutral-500 ring-light-green bg-light-gray focus:text-accent-focus w-full mb-5"
              ></input>
            </div>

            {/* BUTTON */}
            <button
              disabled={handleOnSubmit.isLoading}
              type="submit"
              className="rounded-lg hover:bg-light-gray hover:text-neutral-900 hover:ring-2 hover:ring-neutral-600 bg-light-green text-neutral-200 py-3 w-full font-bold"
            >
              {handleOnSubmit.isLoading ? "wait..." : "Login"}
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
