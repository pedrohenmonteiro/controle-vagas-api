import Candidaturas from "../templates/Candidaturas";
import { useEffect } from "react";


export default function CandidaturasPage() {

  useEffect(() => {
    login();
  }, [])

  const login = () => {
    window.location.href = "http://localhost:8080/oauth2/authorize?response_type=code&redirect_uri=http://localhost:5173/login/oauth2/code/client-server&client_id=client-server&scope=read";
  }


  return (
    <div>
      <Candidaturas />
    </div>
  );
}
