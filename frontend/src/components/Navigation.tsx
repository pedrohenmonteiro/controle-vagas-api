import React from "react";

export default function Navigation() {
  return (
    <nav className="bg-gray-100 rounded py-1 px-1">
      <ul className="flex gap-1 justify-between text-lg font-semibold text-gray-500">
        <li className="bg-white text-black rounded py-2 px-8">Aprovado</li>
        <li className="rounded py-2 px-8">Reprovado</li>
        <li className="rounded py-2 px-8">Em análise</li>
      </ul>
    </nav>
  );
}
