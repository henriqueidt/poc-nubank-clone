import { ButtonHTMLAttributes, ReactNode } from "react";

export default function Button({
  children,
  type,
}: {
  children: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) {
  return <button type={type}>{children}</button>;
}
