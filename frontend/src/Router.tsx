import { Route, Routes } from "react-router-dom";
import Candidaturas from "./templates/Candidaturas";
import CandidaturasPage from "./pages/candidaturaspage";
import SignInPage from "./pages/signinpage";
import SignUpPage from "./pages/signuppage";
import AuthCallback from "./auth/AuthCallback";
import Home from "./auth/Auth";
import Auth from "./components/BaseAuth";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/auth/callback" element={<AuthCallback />} />
    <Route path="/candidaturas" element={<CandidaturasPage />} />
    <Route path="/cadastro" element={<SignUpPage />} />
  </Routes>
);
