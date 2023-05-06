import { Button } from "flowbite-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/detail/:id" element={<DetailPost />} />
        <Route path="/upload-post" element={<UploadPost />} />
        <Route path="/send-project/:id" element={<SendProject />} />
        <Route path="/view-project/:id" element={<ViewProject />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/list-order" element={<ListOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
