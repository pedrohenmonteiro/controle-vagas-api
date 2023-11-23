import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./auth-services";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.checkCredentials()) {
      navigate("/candidaturas");
    } else {
      login();
    }
  }, []);

  const login = () => {
    window.location.href =
      "http://localhost:8080/oauth2/authorize?response_type=code&redirect_uri=http://localhost:5173/auth/callback&client_id=client-server&scope=read";
  };

  return <div></div>;
}
