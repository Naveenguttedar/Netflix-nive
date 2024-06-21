import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (!user?.email) {
    console.log("user is not  present");
    return <Navigate to="/" />;
  }
  console.log("user is present");
  return children;
};

export default ProtectedRoute;
