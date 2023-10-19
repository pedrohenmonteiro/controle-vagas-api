import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  icon?: JSX.Element;
  icon2?: JSX.Element;
  color?: "blue" | "gray";
  bold?: boolean;
  large?: boolean;
} & ButtonTypes;

export default function Button({
  children,
  icon,
  icon2,
  color = "gray",
  bold = false,
  large = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={` bg-gray-100 py-1 px-3 flex items-center gap-2 rounded text-base disabled:opacity-60 justify-center  
      ${
        color == "blue" &&
        "bg-indigo-400 text-white hover:bg-indigo-500 transition"
      }
      ${bold && "font-bold"}
      ${large && "py-3"}`}
      {...props}
    >
      {icon}
      {children}
      {!!icon2 && (
        <span className="border-l-[1px] pl-2 border-gray-400">{icon2}</span>
      )}
    </button>
  );
}
