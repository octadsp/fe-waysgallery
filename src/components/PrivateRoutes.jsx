import { Navigate, Outlet } from "react-router-dom";

// Import context
import { useContext } from "react";

// Import UserContext
import { UserContext } from "../context/UserContext";

export function PrivateRouteLogin() {
  const [state] = useContext(UserContext);

  if (!state.isLogin) {
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
}
