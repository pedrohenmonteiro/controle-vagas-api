import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  icon?: JSX.Element;
  icon2?: JSX.Element;
  color?: "blue" | "gray";
  bold?: boolean;
} & ButtonTypes;

export default function Button({
  children,
  icon,
  icon2,
  color = "gray",
  bold = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-gray-100 py-1 px-3 flex items-center gap-2 rounded text-base disabled:opacity-60
      ${color == "blue" && "bg-indigo-400 text-white"}
      ${bold && "font-bold"}`}
      {...props}
    >
      {icon}
      {!!children && <span className="text-center">{children}</span>}
      {!!icon2 && (
        <span className="border-l-[1px] pl-2 border-gray-400">{icon2}</span>
      )}
    </button>
  );
}
