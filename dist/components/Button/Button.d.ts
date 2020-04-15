import React, { ReactNode } from "react";
interface ButtonProps {
    children: ReactNode;
    elementType?: "button" | "a";
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const Button: ({ children, elementType: ButtonElement, onClick, }: ButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map