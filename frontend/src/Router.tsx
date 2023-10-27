import { Route, Routes } from "react-router-dom";
import Candidaturas from "./templates/Candidaturas";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Candidaturas />} />
    <Route path="/candidaturas" element={<Candidaturas />} />
  </Routes>
);
