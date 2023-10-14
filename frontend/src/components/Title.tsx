import React from "react";

type TitleProps = {
  icon?: JSX.Element;
  children: React.ReactNode;
};

export default function Title({ icon, children }: TitleProps) {
  return (
    <h1 className="flex items-center gap-2 text-xl">
      {icon}
      {children}
    </h1>
  );
}
