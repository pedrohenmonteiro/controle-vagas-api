import { Route, Routes } from "react-router-dom";
import Candidaturas from "./templates/Candidaturas";
import CandidaturasPage from "./pages/candidaturaspage";
import SignInPage from "./pages/signinpage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/candidaturas" element={<CandidaturasPage />} />
  </Routes>
);
