import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[480px] ${className ?? ""}`}>{children}</div>
  );
}
