import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import EditProfile from "./pages/EditProfile";
import DetailPost from "./pages/DetailPost";
import UploadPost from "./pages/UploadPost";
import SendProject from "./pages/SendProject";
import ViewProject from "./pages/ViewProject";
import ListOrder from "./pages/ListOrder";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { API, setAuthToken } from "./config/api";
import { PrivateRouteLogin } from "./components/PrivateRoutes";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? null : (
        <Routes>
          {/* Bisa Diakses Global */}
          <Route path="/" element={<LandingPage />} />
          {/* Bisa Diakses Kalo udah Login */}
          <Route element={<PrivateRouteLogin />}>
            <Route path="/post/:id" element={<DetailPost />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/upload-post" element={<UploadPost />} />
            <Route path="/send-project/:id" element={<SendProject />} />
            <Route path="/view-project/:id" element={<ViewProject />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/list-order" element={<ListOrder />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
