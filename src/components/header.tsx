import { type ReactNode } from "react";

export default function Header({image, children}: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
