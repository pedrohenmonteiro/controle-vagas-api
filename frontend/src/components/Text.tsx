export type TecnologiaProps = {
  tecnologia?: keyof typeof tecnologias;
};

type TextProps = {
  icon?: JSX.Element;
  children: React.ReactNode;
} & TecnologiaProps;

const tecnologias = {
  Angular: "border-red-400",
  React: "border-cyan-500",
  Vue: "border-emerald-400",
  Java: "border-red-400",
  SQL: "border-orange-400",
  TypeScript: "border-blue-400",
  JavaScript: "border-yellow-400",
  "C#": "border-purple-400",
  Elixir: "border-fuchsia-600",
  Golang: "border-cyan-500",
  C: "border-indigo-800",
  undefined: "border-green-500",
};

export default function Text({
  icon,
  tecnologia = "undefined",
  children,
}: TextProps) {
  console.log(tecnologias[tecnologia]);

  return (
    <div className="flex items-center text-lg gap-2 text-gray-600">
      {!tecnologia && icon}
      {tecnologia && (
        <div
          className={`bg-transparent border-[2px] rounded-full p-[6px] ${tecnologias[tecnologia]}`}
        ></div>
      )}
      <span>{children}</span>
    </div>
  );
}
