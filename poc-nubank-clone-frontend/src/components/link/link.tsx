import { ReactNode } from "react";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return <a href={href}>{children} &#62;</a>;
}
