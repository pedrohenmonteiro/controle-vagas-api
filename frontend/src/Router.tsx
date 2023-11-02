import { Route, Routes } from "react-router-dom";
import Candidaturas from "./templates/Candidaturas";
import CandidaturasPage from "./pages/candidaturaspage";
import SignInPage from "./pages/signinpage";
import SignUpPage from "./pages/signuppage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/candidaturas" element={<CandidaturasPage />} />
    <Route path="/cadastro" element={<SignUpPage />} />
  </Routes>
);
