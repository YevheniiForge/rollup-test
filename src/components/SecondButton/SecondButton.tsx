import React, { ReactNode } from "react";
import { rootSecond } from "./SecondButton.module.scss";
// import "./SecondButton.module.scss";

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
    className={rootSecond}
    // className="rootSecond"
    onClick={onClick}
    {...(ButtonElement === "button" ? { type: "button" } : {})}
  >
    {children}
  </ButtonElement>
);
