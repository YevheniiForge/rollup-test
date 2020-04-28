import React, { ReactNode } from "react";

import { root } from "./SecondButton.module.css";

interface BSecondButtonProps {
  children: ReactNode;
  elementType?: "button" | "a";
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const SecondButton = ({
  children,
  elementType: ButtonElement = "button",
  onClick,
}: BSecondButtonProps) => (
  <ButtonElement
    className={root}
    onClick={onClick}
    {...(ButtonElement === "button" ? { type: "button" } : {})}
  >
    {children}
  </ButtonElement>
);
