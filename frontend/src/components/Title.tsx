import React from "react";

type TitleProps = {
  icon?: JSX.Element;
  children: React.ReactNode;
  bold?: boolean;
};

export default function Title({ icon, children, bold }: TitleProps) {
  return (
    <h1
      className={`flex items-center gap-2 text-xl ${bold ? "font-bold" : ""}`}
    >
      {icon}
      {children}
    </h1>
  );
}
