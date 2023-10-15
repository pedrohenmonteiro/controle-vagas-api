export type TecnologiaProps = {
  tecnologia?: keyof typeof tecnologias | string;
};

type TextProps = {
  icon?: JSX.Element;
  children: React.ReactNode;
  medium?: boolean;
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
  other: "border-sky-400"
};

export default function Text({
  icon,
  tecnologia,
  children,
  medium
}: TextProps) {
  return (
    <div className={`flex items-center gap-1 text-gray-600 ${medium ? "text-base" : "text-sm"}` }>
      {!tecnologia && icon}
      {tecnologia && (
        <div
          className={`bg-transparent border-[2px] 
          rounded-full p-[4px] ${tecnologias[tecnologia as keyof typeof tecnologias] || tecnologias.other}`}
        ></div>
      )}
      <span>{children}</span>
    </div>
  );
}