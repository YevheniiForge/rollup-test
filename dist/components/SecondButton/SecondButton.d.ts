import React, { ReactNode } from "react";
interface BSecondButtonProps {
    children: ReactNode;
    elementType?: "button" | "a";
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const SecondButton: ({ children, elementType: ButtonElement, onClick, }: BSecondButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=SecondButton.d.ts.map