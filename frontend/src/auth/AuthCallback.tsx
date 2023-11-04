import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "./auth-services";

export default function AuthCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get("code");

    if (authorizationCode) {
      AuthService.retrieveToken(authorizationCode);
      navigate("/candidaturas");
    }
  }, [location, navigate]);

  return <div></div>;
}
