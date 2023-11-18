import React from "react";

type NavigationProps = {
  onFilterChange: (v: "Aprovado" | "Reprovado" | "Em análise") => void;
};

export default function Navigation({ onFilterChange }: NavigationProps) {
  const buttonStyle =
    "hover:shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-700 rounded-lg py-2 px-8 cursor-pointer";

  return (
    <nav className="bg-gray-100 rounded py-1 px-1">
      <ul className="flex gap-1 justify-between text-lg font-semibold text-gray-500">
        <li
          className={`bg-white shadow-md ${buttonStyle}`}
          onClick={() => onFilterChange("Aprovado")}
        >
          Aprovado
        </li>
        <li
          className={`${buttonStyle}`}
          onClick={() => onFilterChange("Reprovado")}
        >
          Reprovado
        </li>
        <li
          className={`${buttonStyle}`}
          onClick={() => onFilterChange("Em análise")}
        >
          Em análise
        </li>
      </ul>
    </nav>
  );
}
