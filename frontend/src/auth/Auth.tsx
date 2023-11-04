import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    login();
  }, []);

  const login = () => {
    window.location.href =
      "http://localhost:8080/oauth2/authorize?response_type=code&redirect_uri=http://localhost:5173/auth/callback&client_id=client-server&scope=read";
  };

  return <div></div>;
}
