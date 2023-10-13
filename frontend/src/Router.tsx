import { Routes, Route } from "react-router-dom";

export const Router = () => (
  <Routes>
    <Route path="/" element={<div className="text-violet-500">Teste</div>} />
    <Route path="/movie/:id" element={<div>Teste de página</div>} />
  </Routes>
);
