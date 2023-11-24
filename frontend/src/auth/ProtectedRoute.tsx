import Cookies from "js-cookie";
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import authService from "./auth-services";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const login = authService.checkCredentials();

  return login ? <div>{children}</div> : <Auth />;
};

export default ProtectedRoute;
