import Cookies from "js-cookie";
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import Auth from "./Auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const login = !!Cookies.get("access_token");

  return login ? <div>{children}</div> : <Auth />;
};

export default ProtectedRoute;
