import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  icon?: JSX.Element;
  icon2?: JSX.Element;
} & ButtonTypes;

export default function Button({
  children,
  icon,
  icon2,
  ...props
}: ButtonProps) {
  return (
    <button className="bg-gray-100 py-1 px-3 flex items-center gap-2 rounded text-xl">
      {icon}
      {!!children && <span>{children}</span>}
      {!!icon2 && (
        <span className="border-l-[1px] pl-2 border-gray-400">{icon2}</span>
      )}
    </button>
  );
}
