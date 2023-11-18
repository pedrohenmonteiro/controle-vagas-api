import React, { useState } from "react";

type NavigationProps = {
  onFilterChange: (v: "Aprovado" | "Reprovado" | "Em análise") => void;
};

export default function Navigation({ onFilterChange }: NavigationProps) {
  const [selectedFilter, setSelectedFilter] = useState<
    "Aprovado" | "Reprovado" | "Em análise"
  >("Aprovado");

  const handleFilterChange = (
    filter: "Aprovado" | "Reprovado" | "Em análise"
  ) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const getButtonStyle = (filter: "Aprovado" | "Reprovado" | "Em análise") => {
    return `hover:shadow-md transition-all duration-300 ease-in-out ${
      selectedFilter === filter ? "bg-white shadow-md" : ""
    } hover:bg-white hover:text-gray-700 rounded-lg py-2 px-8 cursor-pointer`;
  };

  return (
    <nav className="bg-gray-100 rounded-lg py-1 px-1">
      <ul className="flex gap-1 justify-between text-lg font-semibold text-gray-500">
        <li
          className={getButtonStyle("Aprovado")}
          onClick={() => handleFilterChange("Aprovado")}
        >
          Aprovado
        </li>
        <li
          className={getButtonStyle("Reprovado")}
          onClick={() => handleFilterChange("Reprovado")}
        >
          Reprovado
        </li>
        <li
          className={getButtonStyle("Em análise")}
          onClick={() => handleFilterChange("Em análise")}
        >
          Em análise
        </li>
      </ul>
    </nav>
  );
}
